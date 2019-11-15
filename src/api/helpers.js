const UNCATEGORIZED_ENTITES_CATEGORY_TITLE = 'Uncategorized';

const groupByCategory = (entities) => {
  const uncategorizedEntitesCategory = {
    id: null,
    title: UNCATEGORIZED_ENTITES_CATEGORY_TITLE,
    items: [],
  };

  const categoriesById = entities.reduce((categories, item) => {
    const { category } = item;

    if (!category) {
      return addToCategory(uncategorizedEntitesCategory, categories, item);
    }

    return addToCategory(category, categories, item);
  }, {});

  return Object.values(categoriesById);
};

const addToCategory = (category, categories, item) => {
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
