'use strict';

const bodyRows = document.querySelectorAll('tbody tr');
const tbody = document.querySelector('tbody');
const headers = document.querySelector('thead tr');

headers.addEventListener('click', (e) => {
  const childs = [...headers.children];
  const listToSort = [];
  const aimIndx = childs.findIndex((elem, i) => {
    if (elem === e.target) {
      return true;
    }

    return false;
  });

  for (const row of bodyRows) {
    listToSort.push({
      aimCell: row.children[aimIndx],
      row: row,
    });
  }

  listToSort.sort((elem1, elem2) => {
    if (aimIndx === 0 || aimIndx === 1) {
      return elem1.aimCell.textContent.localeCompare(elem2.aimCell.textContent);
    } else if (aimIndx === 2) {
      return +elem1.aimCell.textContent - +elem2.aimCell.textContent;
    } else if (aimIndx === 3) {
      const newElem1 = Number(elem1.aimCell.textContent.replaceAll(/\D/g, ''));
      const newElem2 = Number(elem2.aimCell.textContent.replaceAll(/\D/g, ''));

      return newElem1 - newElem2;
    }
  });

  for (let i = 0; i < listToSort.length; i++) {
    tbody.appendChild(listToSort[i].row);
  }
});
