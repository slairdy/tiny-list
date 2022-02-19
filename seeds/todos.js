exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { id: 1, task: 'Vaccuum Lounge', complete: 0 },
        { id: 2, task: 'Fold & Put Away Laundry', complete: 0 },
        { id: 3, task: 'Wash Dishes', complete: 0 }
      ])
    })
}
