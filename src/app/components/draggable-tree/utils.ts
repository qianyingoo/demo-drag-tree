interface DragData {
  current: {
    parent: {
      [key: string]: any
    },
    nodeData: {
      [key: string]: any
    }
  };
  target: {
    parent: {
      [key: string]: any
    },
    nodeData: {
      [key: string]: any
    }
  };
  dropPos: number;
}

const dragData: DragData = {
  current: {
    parent: {},
    nodeData: {}
  },
  target: {
    parent: {},
    nodeData: {}
  },
  dropPos: 0 // 0 - 作为子级；1 - 放在目标节点后面；-1 - 放在目标节点前面
};

/**
 * 处理dataSource数据
 * @param data 原数据
 * @param level 起始level
 * @param isExpand 是否展开当前节点
 */
function transformData(data, level, isExpand = false) {
  data.forEach(item => {
    item.level = level;
    item.isExpand = isExpand;
    if (item.children && item.children.length > 0) {
      transformData(item.children, level + 1);
    }
  });
}

function removeItem(item, arr) {
  const index = arr.indexOf(item);
  arr.splice(index, 1);
}

function setObjLevel(node, level, isExpand = false) {
  node.level = level;
  node.isExpand = isExpand;
  if (node.children && node.children.length > 0) {
    node.children.forEach(item => {
      setObjLevel(item, level + 1);
    });
  }
}

export {transformData, setObjLevel, dragData, removeItem};
