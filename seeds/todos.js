
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        {id: 1, task: 'Vaccuum Lounge', complete: false},
        {id: 2, task: 'Fold & Put Away Laundry', complete: false},
        {id: 3, task: 'Wash Dishes', complete: false}
      ]);
    });
};
