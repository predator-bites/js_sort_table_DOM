'use strict';

const bodyRows = document.querySelectorAll('tbody tr');
const tbody = document.querySelector('tbody');
const headers = document.querySelector('thead tr');

headers.addEventListener('click', (e) => {
  const listToSort = [];

  const th = e.target.closest('th');
  const aimIndx = th?.cellIndex;

  if (aimIndx === -1) {
    return;
  }

  for (let i = 0; i < bodyRows.length; i++) {
    const row = bodyRows[i];

    if (row.children.length < aimIndx) {
      return;
    }

    listToSort.push({
      aimCell: row.children[aimIndx],
      row: row,
    });
  }

  listToSort.sort((elem1, elem2) => {
    if (
      typeof elem1 === 'undefined' ||
      elem1 === null ||
      typeof elem2 === 'undefined' ||
      elem2 === null
    ) {
      return;
    }

    if (aimIndx === 0 || aimIndx === 1) {
      return elem1.aimCell.textContent
        .toLowerCase()
        .localeCompare(elem2.aimCell.textContent.toLowerCase());
    } else if (aimIndx === 2) {
      return +elem1.aimCell.textContent - +elem2.aimCell.textContent;
    } else if (aimIndx === 3) {
      const newElem1 = Number(elem1.aimCell.textContent.replace(/\D/g, ''));
      const newElem2 = Number(elem2.aimCell.textContent.replace(/\D/g, ''));

      return newElem1 - newElem2;
    }
  });

  for (let i = 0; i < listToSort.length; i++) {
    tbody.appendChild(listToSort[i].row);
  }
});
