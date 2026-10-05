export default class KanbanAPI {
  static getItems(columnId) {
    const column = read().find((column) => column.id == columnId);

    if (!column) {
      return [];
    }

    return column.item;
  }

  static insertItem(columnId, Content) {
    const data = read();
    const column = data.find((column) => column.id == columnId);
    const item = {
      id: Math.floor(Math.random() * 1000000),
      Content,
    };

    if (!column) {
      throw new Error("Column does not exist");
    }

    column.item.push(item);
    save(data);
    return item;
  }

  static updateItem(itemId, newProps) {
    const data = read();
    const [item, currentColumn] = (() => {
      for (const column of data) {
        const item = column.item.find((item) => item.id == itemId);
        if (item) {
          return [item, column];
        }
      }
    })();

    if (!item) {
      throw new Error("Item not found");
    }

    item.Content =
      newProps.Content === undefined ? item.Content : newProps.Content;

    //update column and position
    if (newProps.columnId !== undefined && newProps.position !== undefined) {
      const targetColumn = data.find(
        (column) => column.id == newProps.columnId,
      );
      if (!targetColumn) {
        throw new Error("Target column not found");
      }
      //delete item from its current column
      currentColumn.item.splice(currentColumn.item.indexOf(item), 1);

      //move item into its new column and position
      targetColumn.item.splice(newProps.position, 0, item);
    }
    save(data);
  }
}
function read() {
  const json = localStorage.getItem("kanban-data");
  if (!json) {
    return [
      { id: 1, item: [] },
      { id: 2, item: [] },
      { id: 3, item: [] },
    ];
  }
  return JSON.parse(json);
}

function save(data) {
  localStorage.setItem("kanban-data", JSON.stringify(data));
}
