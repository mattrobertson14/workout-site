export const lifting = {
  days: {
    monday : {
      id : 1,
      exercises : [
        {id: "sc", name: "Skull Crushers", sets: 4, reps: 8},
        {id: "cgb", name: "Close Grip Bench", sets: 4, reps: 8},
        {id: "rpd", name: "Rope Push Downs", sets: 3, reps: 12},
        {id: "ohe", name: "Overhead Extension", sets: 3, reps: 12}
      ]
    },
    tuesday : {
      id : 2,
      exercises : [
        {id: "bc", name: "Barbell Curls", sets: 4, reps: 8},
        {id: "dc", name: "Dumbell Curls", sets: 4, reps: 8},
        {id: "mc", name: "Masonry Curls", sets: 4, reps: 8},
        {id: "rgc", name: "Reverse Grip Curls", sets: 4, reps: 6}
      ]
    },
    wednesday : {
      id : 3,
      exercises : [
        {id: "dps", name: "Dips", sets: 4, reps: 8},
        {id: "db", name: "Dumbell Bench", sets: 4, reps: 8},
        {id: "wf", name: "Wire Flys", sets: 3, reps: 8},
        {id: "fl", name: "Flys", sets: 4, reps: 8}
      ]
    },
    thursday : {
      id : 4,
      exercises : [
        {id: "pd", name: "Pull Downs", sets: 4, reps: 8},
        {id: "sr", name: "Seated Rows", sets: 4, reps: 8},
        {id: "rf", name: "Reverse Flys", sets: 4, reps: 8},
        {id: "pu", name: "Pull Ups", sets: 4, reps: 6}
      ]
    },
    friday : {
      id : 5,
      exercises : [
        {id: "dp", name: "Dumbell Press", sets: 4, reps: 8},
        {id: "shr", name: "Shrugs", sets: 4, reps: 8},
        {id: "dr", name: "Dumbell Raises", sets: 4, reps: 8},
        {id: "bp", name: "Barbell Press", sets: 4, reps: 6}
      ]
    }
  },
  weight: {
    sc : {
      starting : 30.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    cgb : {
      starting : 95.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    rpd : {
      starting : 27.5,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    ohe: {
      starting : 22.5,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    bc : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    dc : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    mc : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    rgc : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    dps : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    db : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    wf : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    fl : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    pd : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    sr : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    rf : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    pu : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    dp : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    shr : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    dr : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
    bp : {
      starting : 10.0,
      weeklyIncrement : {operation: "add", value: 2.5},
      unit: "lbs"
    },
  }

}
