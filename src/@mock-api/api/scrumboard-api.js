import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import mockApi from '../mock-api.json';
import mock from '../mock';

const boardsDB = mockApi.components.examples.scrumboard_boards.value;
const labelsDB = mockApi.components.examples.scrumboard_labels.value;
const cardsDB = mockApi.components.examples.scrumboard_cards.value;
const membersDB = mockApi.components.examples.scrumboard_members.value;
const listsDB = mockApi.components.examples.scrumboard_lists.value;

/**
 * GET BOARDS
 * GET api/scrumboard/boards
 */
mock.onGet('/api/scrumboard/boards').reply((config) => {
  return [200, boardsDB];
});

/**
 * CREATE NEW BOARD
 * POST api/scrumboard/boards
 */
mock.onPost('/api/scrumboard/boards').reply(({ data }) => {
  const newBoard = { id: FuseUtils.generateGUID(), ...JSON.parse(data) };
  boardsDB.push(newBoard);

  return [200, newBoard];
});

/**
 * GET BOARD LABELS
 * GET api/scrumboard/boards/{boardId}/labels
 */
mock.onGet(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/labels/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/labels/).groups;
  const labels = labelsDB.filter((item) => item.boardId === id);
  return [200, labels];
});

/**
 * CREATE CARD
 * PUT api/scrumboard/boards/{boardId}/lists/{listId}/cards
 */
mock
  .onPost(/\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/lists\/(?<listId>[^/]+)\/cards/)
  .reply(({ url, data }) => {
    const { boardId, listId } = url.match(
      /\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/lists\/(?<listId>[^/]+)\/cards/
    ).groups;

    const newCard = {
      title: '',
      description: '',
      labels: [],
      dueDate: '',
      attachmentCoverId: '',
      memberIds: [],
      attachments: [],
      subscribed: true,
      checklists: [],
      activities: [],
      ...JSON.parse(data),
      id: FuseUtils.generateGUID(),
      boardId,
      listId,
    };

    cardsDB.push(newCard);

    const board = _.find(boardsDB, { id: boardId });

    // Add card into board
    _.assign(board, {
      ...board,
      lists: board.lists.map((list) =>
        list.id === listId ? { ...list, cards: [...list.cards, newCard.id] } : list
      ),
    });

    return [200, newCard];
  });

/**
 * UPDATE CARD
 * PUT api/scrumboard/boards/{boardId}/cards/{cardId}
 */
mock
  .onPut(/\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/cards\/(?<cardId>[^/]+)/)
  .reply(({ url, data }) => {
    const { boardId, cardId } = url.match(
      /\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/cards\/(?<cardId>[^/]+)/
    ).groups;

    const card = _.find(cardsDB, { id: cardId });

    _.assign(card, JSON.parse(data));
    return [200, card];
  });

/**
 * DELETE CARD
 * api/scrumboard/boards/{boardId}/cards/{cardId}
 */
mock
  .onDelete(/\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/cards\/(?<cardId>[^/]+)/)
  .reply((config) => {
    const { boardId, cardId } = config.url.match(
      /\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/cards\/(?<cardId>[^/]+)/
    ).groups;

    const board = _.find(boardsDB, { id: boardId });

    // Remove cards from board
    _.assign(board, {
      ...board,
      lists: board.lists.map((list) => ({
        ...list,
        cards: _.reject(list.cards, (id) => id === cardId),
      })),
    });

    // Remove card
    _.remove(cardsDB, { id: cardId });

    return [200, cardId];
  });

/** GET LISTS BY BOARD ID
 * GET /api/scrumboard/boards/{boardId}/lists
 */
mock.onGet(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/lists/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/lists/).groups;
  const lists = listsDB.filter((item) => item.boardId === id);
  return [200, lists];
});

/**
 * UPDATE LIST
 * PUT api/scrumboard/boards/{boardId}/lists/{listId}
 */
mock
  .onPut(/\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/lists\/(?<listId>[^/]+)/)
  .reply(({ url, data }) => {
    const { boardId, listId } = url.match(
      /\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/lists\/(?<listId>[^/]+)/
    ).groups;

    const list = _.find(listsDB, { id: listId });

    _.assign(list, JSON.parse(data));

    return [200, list];
  });

/**
 * CREATE LIST
 * POST api/scrumboard/boards/{boardId}/lists
 */
mock.onPost(/\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/lists/).reply(({ url, data }) => {
  const { boardId } = url.match(/\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/lists/).groups;

  const newList = {
    id: FuseUtils.generateGUID(),
    boardId,
    ...JSON.parse(data),
  };

  listsDB.push(newList);

  const board = _.find(boardsDB, { id: boardId });

  // Add list into board
  _.assign(board, { ...board, lists: [...board.lists, { id: newList.id, cards: [] }] });

  return [200, newList];
});

/**
 * DELETE LIST
 * DELETE api/scrumboard/boards/{boardId}/lists/{listId}
 */
mock
  .onDelete(/\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/lists\/(?<listId>[^/]+)/)
  .reply((config) => {
    const { boardId, listId } = config.url.match(
      /\/api\/scrumboard\/boards\/(?<boardId>[^/]+)\/lists\/(?<listId>[^/]+)/
    ).groups;

    const board = _.find(boardsDB, { id: boardId });

    // Remove cards of the list
    _.remove(cardsDB, { listId });

    // Remove list from board
    _.assign(board, { ...board, lists: _.reject(board.lists, { id: listId }) });

    // Remove list
    _.remove(listsDB, { id: listId });

    return [200, listId];
  });

/**
 * GET BOARD CARDS
 * GET api/scrumboard/boards/{boardId}/cards
 */
mock.onGet(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/cards/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)\/cards/).groups;
  const cards = cardsDB.filter((item) => item.boardId === id);
  return [200, cards];
});

/**
 * GET BOARD
 * GET api/scrumboard/boards/{boardId}
 */
mock.onGet(/\/api\/scrumboard\/boards\/[^/]+/).reply((config) => {
  const { id } = config.url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)/).groups;
  const board = _.find(boardsDB, { id });

  if (board) {
    return [200, board];
  }

  return [404, 'Requested board do not exist.'];
});

/**
 * UPDATE BOARD
 * PUT api/scrumboard/boards/{boardId}
 */
mock.onPut(/\/api\/scrumboard\/boards\/[^/]+/).reply(({ url, data }) => {
  const { id } = url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)/).groups;

  const board = _.find(boardsDB, { id });

  _.assign(board, { ...board, ...JSON.parse(data) });

  return [200, board];
});

/**
 * DELETE BOARD
 * DELETE api/scrumboard/boards/{boardId}
 */
mock.onDelete(/\/api\/scrumboard\/boards\/[^/]+/).reply(({ url }) => {
  const { id } = url.match(/\/api\/scrumboard\/boards\/(?<id>[^/]+)/).groups;

  _.remove(boardsDB, { id });
  _.remove(cardsDB, { boardId: id });
  _.remove(listsDB, { boardId: id });

  return [200, id];
});

/**
 * GET ALL MEMBERS
 * GET api/scrumboard/members
 */
mock.onGet('/api/scrumboard/members').reply(({ data }) => {
  return [200, membersDB];
});
