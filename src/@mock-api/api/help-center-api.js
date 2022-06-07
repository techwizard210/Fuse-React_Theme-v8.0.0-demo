import _ from '@lodash';
import mockApi from '../mock-api.json';
import mock from '../mock';

const faqsDB = mockApi.components.examples.help_center_faqs.value;
const faqCategoriesDB = mockApi.components.examples.help_center_faq_categories.value;

const guidesDB = mockApi.components.examples.help_center_guides.value;
const guideCategoriesDB = mockApi.components.examples.help_center_guide_categories.value;
const guideContent = mockApi.components.examples.help_center_guide_content.value;

mock.onGet('/api/help-center/faqs').reply((config) => {
  return [200, faqsDB];
});
mock.onGet(/\/api\/help-center\/faqs\/[^]+/).reply(({ url, data }) => {
  const { categorySlug } = url.match(/\/api\/help-center\/faqs\/(?<categorySlug>[^/]+)/).groups;
  const category = _.find(faqCategoriesDB, { slug: categorySlug });

  return [200, _.filter(faqsDB, { categoryId: category.id })];
});

mock.onGet('/api/help-center/faqs/categories').reply((config) => {
  return [200, faqCategoriesDB];
});

mock.onGet('/api/help-center/guides').reply((config) => {
  return [200, guidesDB];
});

mock.onGet(/\/api\/help-center\/guides\/[^/]+(?!.)/).reply(({ url, data }) => {
  const { categorySlug } = url.match(/\/api\/help-center\/guides\/(?<categorySlug>[^/]+)/).groups;
  const category = _.find(guideCategoriesDB, { slug: categorySlug });

  return [200, _.filter(guidesDB, { categoryId: category.id })];
});

mock.onGet(/\/api\/help-center\/guides\/[^/]+\/[^/]+/).reply(({ url, data }) => {
  const { categorySlug, guideSlug } = url.match(
    /\/api\/help-center\/guides\/(?<categorySlug>[^/]+)\/(?<guideSlug>[^/]+)/
  ).groups;

  return [200, { ..._.find(guidesDB, { slug: guideSlug }), content: guideContent }];
});

mock.onGet('/api/help-center/guides/categories').reply((config) => {
  return [200, guideCategoriesDB];
});
