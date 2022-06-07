import _ from '@lodash';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { AvatarGroup } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { openCardDialog } from '../../store/cardSlice';
import { selectCardById } from '../../store/cardsSlice';
import BoardCardLabel from './BoardCardLabel';
import { selectMembers } from '../../store/membersSlice';
import BoardCardDueDate from './BoardCardDueDate';
import BoardCardCheckItems from './BoardCardCheckItems';
import { selectBoard } from '../../store/boardSlice';

const StyledCard = styled(Card)(({ theme }) => ({
  transitionProperty: 'box-shadow',
  transitionDuration: theme.transitions.duration.short,
  transitionTimingFunction: theme.transitions.easing.easeInOut,
}));

function BoardCard(props) {
  const { cardId, index } = props;
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);
  const card = useSelector((state) => selectCardById(state, cardId));
  const members = useSelector(selectMembers);
  const commentsCount = getCommentsCount(card);
  const cardCoverImage = _.find(card.attachments, { id: card.attachmentCoverId });

  function handleCardClick(ev, _card) {
    ev.preventDefault();
    dispatch(openCardDialog(_card));
  }

  function getCommentsCount(_card) {
    return _.sum(_card.activities.map((x) => (x.type === 'comment' ? 1 : 0)));
  }

  return (
    <Draggable draggableId={cardId} index={index} type="card">
      {(provided, snapshot) => (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
          <StyledCard
            className={clsx(
              snapshot.isDragging ? 'shadow-lg' : 'shadow',
              'w-full mb-12 rounded-lg cursor-pointer'
            )}
            onClick={(ev) => handleCardClick(ev, card)}
          >
            {board.settings.cardCoverImages && cardCoverImage && (
              <img className="block" src={cardCoverImage.src} alt="card cover" />
            )}

            <div className="p-16 pb-0">
              {card.labels.length > 0 && (
                <div className="flex flex-wrap mb-8 -mx-4">
                  {card.labels.map((id) => (
                    <BoardCardLabel id={id} key={id} />
                  ))}
                </div>
              )}

              <Typography className="font-medium mb-12">{card?.title}</Typography>

              {(card.dueDate || card.checklists.length > 0) && (
                <div className="flex items-center mb-12 -mx-4">
                  <BoardCardDueDate dueDate={card.dueDate} />

                  <BoardCardCheckItems card={card} />
                </div>
              )}
            </div>

            <div className="flex justify-between h-48 px-16">
              <div className="flex items-center space-x-4">
                {card.subscribed && (
                  <FuseSvgIcon size={16} color="action">
                    heroicons-outline:eye
                  </FuseSvgIcon>
                )}

                {card.description !== '' && (
                  <FuseSvgIcon size={16} color="action">
                    heroicons-outline:document-text
                  </FuseSvgIcon>
                )}

                {card.attachments && (
                  <span className="flex items-center space-x-2">
                    <FuseSvgIcon size={16} color="action">
                      heroicons-outline:paper-clip
                    </FuseSvgIcon>
                    <Typography className="" color="text.secondary">
                      {card.attachments.length}
                    </Typography>
                  </span>
                )}
                {commentsCount > 0 && (
                  <span className="flex items-center space-x-2">
                    <FuseSvgIcon size={16} color="action">
                      heroicons-outline:chat
                    </FuseSvgIcon>

                    <Typography className="" color="text.secondary">
                      {commentsCount}
                    </Typography>
                  </span>
                )}
              </div>

              <div className="flex items-center justify-end space-x-12">
                {card.memberIds.length > 0 && (
                  <div className="flex justify-start">
                    <AvatarGroup max={3} classes={{ avatar: 'w-24 h-24 text-12' }}>
                      {card.memberIds.map((id) => {
                        const member = _.find(members, { id });
                        return (
                          <Tooltip title={member.name} key={id}>
                            <Avatar key={index} alt="member" src={member.avatar} />
                          </Tooltip>
                        );
                      })}
                    </AvatarGroup>
                  </div>
                )}
              </div>
            </div>
          </StyledCard>
        </div>
      )}
    </Draggable>
  );
}

export default BoardCard;
