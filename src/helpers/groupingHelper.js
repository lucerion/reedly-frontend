const UNCATEGORIZED_ENTITES_CATEGORY_TITLE = 'Uncategorized';

const uncategorizedEntitesCategory = {
  id: null,
  title: UNCATEGORIZED_ENTITES_CATEGORY_TITLE,
  items: [],
};

const groupByCategory = (entities) => {
  const itemsCategoriesById = entities.reduce((categories, item) => addItemCategory(categories, item), {});

  return Object.values(itemsCategoriesById);
};

const addItemCategory = (categories, item) => {
  const category = item.category || uncategorizedEntitesCategory;
  const { id } = category;

  const {
    [id]: {
      items = [],
    } = {},
  } = categories;

  categories[id] = {
    ...category,
    items: [...items, item],
  };

  return categories;
};

export { groupByCategory };
