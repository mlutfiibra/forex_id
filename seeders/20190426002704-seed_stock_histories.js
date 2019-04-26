'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('stock_histories',  [
      {        
        "stockId" : 1,
        "buy" : 79430,
        "sell" : 78079,
        "createdAt" : "2019-04-26T00:19:33Z",
        "updatedAt" : "2019-04-26T00:19:33Z"
      },
      {        
        "stockId" : 2,
        "buy" : 78021,
        "sell" : 75322,
        "createdAt" : "2019-04-26T00:19:33Z",
        "updatedAt" : "2019-04-26T00:19:33Z"
      },
      {        
        "stockId" : 3,
        "buy" : 72623,
        "sell" : 78462,
        "createdAt" : "2019-04-26T00:19:33Z",
        "updatedAt" : "2019-04-26T00:19:33Z"
      },
      {        
        "stockId" : 4,
        "buy" : 71356,
        "sell" : 70250,
        "createdAt" : "2019-04-26T00:19:33Z",
        "updatedAt" : "2019-04-26T00:19:33Z"
      },
      {        
        "stockId" : 5,
        "buy" : 75663,
        "sell" : 73544,
        "createdAt" : "2019-04-26T00:19:33Z",
        "updatedAt" : "2019-04-26T00:19:33Z"
      },
      {        
        "stockId" : 3,
        "buy" : 77784,
        "sell" : 71134,
        "createdAt" : "2019-04-26T00:19:34Z",
        "updatedAt" : "2019-04-26T00:19:34Z"
      },
      {        
        "stockId" : 5,
        "buy" : 71310,
        "sell" : 75783,
        "createdAt" : "2019-04-26T00:19:34Z",
        "updatedAt" : "2019-04-26T00:19:34Z"
      },
      {        
        "stockId" : 2,
        "buy" : 71706,
        "sell" : 75324,
        "createdAt" : "2019-04-26T00:19:34Z",
        "updatedAt" : "2019-04-26T00:19:34Z"
      },
      {        
        "stockId" : 1,
        "buy" : 74003,
        "sell" : 78308,
        "createdAt" : "2019-04-26T00:19:34Z",
        "updatedAt" : "2019-04-26T00:19:34Z"
      },
      {
        "stockId" : 4,
        "buy" : 77498,
        "sell" : 70137,
        "createdAt" : "2019-04-26T00:19:34Z",
        "updatedAt" : "2019-04-26T00:19:34Z"
      },
      { 
        "stockId" : 3,
        "buy" : 74328,
        "sell" : 74349,
        "createdAt" : "2019-04-26T00:19:35Z",
        "updatedAt" : "2019-04-26T00:19:35Z"
      },
      {
        "stockId" : 4,
        "buy" : 70253,
        "sell" : 72161,
        "createdAt" : "2019-04-26T00:19:35Z",
        "updatedAt" : "2019-04-26T00:19:35Z"
      },
      {
        "stockId" : 5,
        "buy" : 71570,
        "sell" : 71914,
        "createdAt" : "2019-04-26T00:19:35Z",
        "updatedAt" : "2019-04-26T00:19:35Z"
      },
      {
        "stockId" : 1,
        "buy" : 72082,
        "sell" : 76705,
        "createdAt" : "2019-04-26T00:19:35Z",
        "updatedAt" : "2019-04-26T00:19:35Z"
      },
      {
        "stockId" : 2,
        "buy" : 74045,
        "sell" : 74332,
        "createdAt" : "2019-04-26T00:19:35Z",
        "updatedAt" : "2019-04-26T00:19:35Z"
      },
      {
        "stockId" : 3,
        "buy" : 72726,
        "sell" : 71215,
        "createdAt" : "2019-04-26T00:19:36Z",
        "updatedAt" : "2019-04-26T00:19:36Z"
      },
      {
        "stockId" : 2,
        "buy" : 79785,
        "sell" : 76410,
        "createdAt" : "2019-04-26T00:19:36Z",
        "updatedAt" : "2019-04-26T00:19:36Z"
      },
      {
        "stockId" : 5,
        "buy" : 71213,
        "sell" : 77235,
        "createdAt" : "2019-04-26T00:19:36Z",
        "updatedAt" : "2019-04-26T00:19:36Z"
      },
      {
        "stockId" : 4,
        "buy" : 72146,
        "sell" : 78651,
        "createdAt" : "2019-04-26T00:19:36Z",
        "updatedAt" : "2019-04-26T00:19:36Z"
      },
      {
        "stockId" : 1,
        "buy" : 78285,
        "sell" : 73179,
        "createdAt" : "2019-04-26T00:19:36Z",
        "updatedAt" : "2019-04-26T00:19:36Z"
      },
      {
        "stockId" : 3,
        "buy" : 74665,
        "sell" : 73139,
        "createdAt" : "2019-04-26T00:19:47Z",
        "updatedAt" : "2019-04-26T00:19:47Z"
      },
      {
        "stockId" : 1,
        "buy" : 76626,
        "sell" : 77409,
        "createdAt" : "2019-04-26T00:19:47Z",
        "updatedAt" : "2019-04-26T00:19:47Z"
      },
      {
        "stockId" : 4,
        "buy" : 77913,
        "sell" : 77532,
        "createdAt" : "2019-04-26T00:19:47Z",
        "updatedAt" : "2019-04-26T00:19:47Z"
      },
      {
        "stockId" : 5,
        "buy" : 73422,
        "sell" : 70365,
        "createdAt" : "2019-04-26T00:19:47Z",
        "updatedAt" : "2019-04-26T00:19:47Z"
      },
      {
        "stockId" : 2,
        "buy" : 76196,
        "sell" : 78637,
        "createdAt" : "2019-04-26T00:19:47Z",
        "updatedAt" : "2019-04-26T00:19:47Z"
      },
      {
        "stockId" : 3,
        "buy" : 79973,
        "sell" : 76916,
        "createdAt" : "2019-04-26T00:19:48Z",
        "updatedAt" : "2019-04-26T00:19:48Z"
      },
      {
        "stockId" : 1,
        "buy" : 72639,
        "sell" : 72130,
        "createdAt" : "2019-04-26T00:19:48Z",
        "updatedAt" : "2019-04-26T00:19:48Z"
      },
      {
        "stockId" : 4,
        "buy" : 76472,
        "sell" : 79159,
        "createdAt" : "2019-04-26T00:19:48Z",
        "updatedAt" : "2019-04-26T00:19:48Z"
      },
      {
        "stockId" : 5,
        "buy" : 77702,
        "sell" : 76489,
        "createdAt" : "2019-04-26T00:19:48Z",
        "updatedAt" : "2019-04-26T00:19:48Z"
      },
      {
        "stockId" : 2,
        "buy" : 72728,
        "sell" : 78741,
        "createdAt" : "2019-04-26T00:19:48Z",
        "updatedAt" : "2019-04-26T00:19:48Z"
      },
      {
        "stockId" : 3,
        "buy" : 70887,
        "sell" : 75151,
        "createdAt" : "2019-04-26T00:19:49Z",
        "updatedAt" : "2019-04-26T00:19:49Z"
      },
      {
        "stockId" : 2,
        "buy" : 72617,
        "sell" : 78153,
        "createdAt" : "2019-04-26T00:19:49Z",
        "updatedAt" : "2019-04-26T00:19:49Z"
      },
      {
        "stockId" : 5,
        "buy" : 70301,
        "sell" : 72908,
        "createdAt" : "2019-04-26T00:19:49Z",
        "updatedAt" : "2019-04-26T00:19:49Z"
      },
      {
        "stockId" : 4,
        "buy" : 70372,
        "sell" : 73029,
        "createdAt" : "2019-04-26T00:19:49Z",
        "updatedAt" : "2019-04-26T00:19:49Z"
      },
      {
        "stockId" : 1,
        "buy" : 75098,
        "sell" : 74674,
        "createdAt" : "2019-04-26T00:19:49Z",
        "updatedAt" : "2019-04-26T00:19:49Z"
      },
      {
        "stockId" : 4,
        "buy" : 76770,
        "sell" : 77035,
        "createdAt" : "2019-04-26T00:19:50Z",
        "updatedAt" : "2019-04-26T00:19:50Z"
      },
      {
        "stockId" : 5,
        "buy" : 72138,
        "sell" : 70053,
        "createdAt" : "2019-04-26T00:19:50Z",
        "updatedAt" : "2019-04-26T00:19:50Z"
      },
      {
        "stockId" : 1,
        "buy" : 72707,
        "sell" : 72145,
        "createdAt" : "2019-04-26T00:19:50Z",
        "updatedAt" : "2019-04-26T00:19:50Z"
      },
      {
        "stockId" : 3,
        "buy" : 77111,
        "sell" : 73523,
        "createdAt" : "2019-04-26T00:19:50Z",
        "updatedAt" : "2019-04-26T00:19:50Z"
      },
      {
        "stockId" : 2,
        "buy" : 74643,
        "sell" : 76615,
        "createdAt" : "2019-04-26T00:19:50Z",
        "updatedAt" : "2019-04-26T00:19:50Z"
      },
      {
        "stockId" : 4,
        "buy" : 74672,
        "sell" : 70630,
        "createdAt" : "2019-04-26T00:19:51Z",
        "updatedAt" : "2019-04-26T00:19:51Z"
      },
      {
        "stockId" : 2,
        "buy" : 71785,
        "sell" : 78566,
        "createdAt" : "2019-04-26T00:19:51Z",
        "updatedAt" : "2019-04-26T00:19:51Z"
      },
      {
        "stockId" : 1,
        "buy" : 73837,
        "sell" : 79088,
        "createdAt" : "2019-04-26T00:19:51Z",
        "updatedAt" : "2019-04-26T00:19:51Z"
      },
      {
        "stockId" : 3,
        "buy" : 79043,
        "sell" : 79823,
        "createdAt" : "2019-04-26T00:19:51Z",
        "updatedAt" : "2019-04-26T00:19:51Z"
      },
      {
        "stockId" : 5,
        "buy" : 72211,
        "sell" : 70873,
        "createdAt" : "2019-04-26T00:19:51Z",
        "updatedAt" : "2019-04-26T00:19:51Z"
      },
      {
        "stockId" : 2,
        "buy" : 76053,
        "sell" : 71694,
        "createdAt" : "2019-04-26T00:19:52Z",
        "updatedAt" : "2019-04-26T00:19:52Z"
      },
      {
        "stockId" : 5,
        "buy" : 75842,
        "sell" : 70481,
        "createdAt" : "2019-04-26T00:19:52Z",
        "updatedAt" : "2019-04-26T00:19:52Z"
      },
      {
        "stockId" : 1,
        "buy" : 76953,
        "sell" : 79440,
        "createdAt" : "2019-04-26T00:19:52Z",
        "updatedAt" : "2019-04-26T00:19:52Z"
      },
      {
        "stockId" : 4,
        "buy" : 77779,
        "sell" : 74625,
        "createdAt" : "2019-04-26T00:19:52Z",
        "updatedAt" : "2019-04-26T00:19:52Z"
      },
      {
        "stockId" : 3,
        "buy" : 79405,
        "sell" : 76326,
        "createdAt" : "2019-04-26T00:19:52Z",
        "updatedAt" : "2019-04-26T00:19:52Z"
      },
      {
        "stockId" : 2,
        "buy" : 78917,
        "sell" : 72141,
        "createdAt" : "2019-04-26T00:19:53Z",
        "updatedAt" : "2019-04-26T00:19:53Z"
      },
      {
        "stockId" : 3,
        "buy" : 78133,
        "sell" : 72591,
        "createdAt" : "2019-04-26T00:19:53Z",
        "updatedAt" : "2019-04-26T00:19:53Z"
      },
      {
        "stockId" : 1,
        "buy" : 79163,
        "sell" : 71052,
        "createdAt" : "2019-04-26T00:19:53Z",
        "updatedAt" : "2019-04-26T00:19:53Z"
      },
      {
        "stockId" : 5,
        "buy" : 72133,
        "sell" : 71977,
        "createdAt" : "2019-04-26T00:19:53Z",
        "updatedAt" : "2019-04-26T00:19:53Z"
      },
      {
        "stockId" : 4,
        "buy" : 79383,
        "sell" : 70389,
        "createdAt" : "2019-04-26T00:19:53Z",
        "updatedAt" : "2019-04-26T00:19:53Z"
      },
      {
        "stockId" : 2,
        "buy" : 70969,
        "sell" : 75019,
        "createdAt" : "2019-04-26T00:19:54Z",
        "updatedAt" : "2019-04-26T00:19:54Z"
      },
      {
        "stockId" : 4,
        "buy" : 70071,
        "sell" : 71479,
        "createdAt" : "2019-04-26T00:19:54Z",
        "updatedAt" : "2019-04-26T00:19:54Z"
      },
      {
        "stockId" : 1,
        "buy" : 71251,
        "sell" : 70147,
        "createdAt" : "2019-04-26T00:19:54Z",
        "updatedAt" : "2019-04-26T00:19:54Z"
      },
      {
        "stockId" : 3,
        "buy" : 71131,
        "sell" : 74370,
        "createdAt" : "2019-04-26T00:19:54Z",
        "updatedAt" : "2019-04-26T00:19:54Z"
      },
      {
        "stockId" : 5,
        "buy" : 75709,
        "sell" : 72003,
        "createdAt" : "2019-04-26T00:19:54Z",
        "updatedAt" : "2019-04-26T00:19:54Z"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('stock_histories', null, {});
  }
};
