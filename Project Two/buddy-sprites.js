// Original YY Buddy PNGs, copied byte-for-byte from the user's read-only sources.
// bounds: [left, top, width, height], alpha > 0; alphaBBox is exclusive-edge XYXY.
// Render bounds at height 55, keeping source aspect; foot is visible-bounds bottom-center.
// mirror applies only an SVG display transform. No original pixels were edited.
// Coordinates use the native 1448 x 1086 assets/park-empty.png canvas.
export const BUDDY_SPRITES = {
  "art-student-a-happy": {
    "file": "assets/buddies/art-student-a-happy.png",
    "canvas": [
      1254,
      1254
    ],
    "bounds": [
      41,
      53,
      1161,
      1155
    ],
    "alphaBBox": [
      41,
      53,
      1202,
      1208
    ],
    "state": "Happy",
    "sourceName": "Art-Student-A-Happy.png",
    "sha256": "9de3eb26c3b1b7d8201653a5cabf0a49857e1eac8f32d914a3e97ff64b6c2649"
  },
  "art-student-b-happy": {
    "file": "assets/buddies/art-student-b-happy.png",
    "canvas": [
      1254,
      1254
    ],
    "bounds": [
      33,
      89,
      1185,
      1125
    ],
    "alphaBBox": [
      33,
      89,
      1218,
      1214
    ],
    "state": "Happy",
    "sourceName": "Art-Student-B-Happy.png",
    "sha256": "ee6f88ae1147cbbcfc7cb2170b3bef6c4a99ebc491d70e9dac9895dc0d6361d9"
  },
  "art-student-c-happy": {
    "file": "assets/buddies/art-student-c-happy.png",
    "canvas": [
      1254,
      1254
    ],
    "bounds": [
      89,
      53,
      1125,
      1148
    ],
    "alphaBBox": [
      89,
      53,
      1214,
      1201
    ],
    "state": "Happy",
    "sourceName": "Art-Student-C-Happy.png",
    "sha256": "62404cae106abea9ede7a3688a0e3c5c8882d2d82bf1654cab5cbdc0fad1fc8c"
  },
  "art-student-d-happy": {
    "file": "assets/buddies/art-student-d-happy.png",
    "canvas": [
      1254,
      1254
    ],
    "bounds": [
      97,
      78,
      1145,
      1158
    ],
    "alphaBBox": [
      97,
      78,
      1242,
      1236
    ],
    "state": "Happy",
    "sourceName": "Art-Student-D-Happy.png",
    "sha256": "1dfe4c90676b66643ce03c0ed35a574c1da2c8e81edd6fa62ae5200a2d7774a6"
  },
  "astronaut-normal": {
    "file": "assets/buddies/astronaut-normal.png",
    "canvas": [
      1254,
      1254
    ],
    "bounds": [
      57,
      55,
      1145,
      1159
    ],
    "alphaBBox": [
      57,
      55,
      1202,
      1214
    ],
    "state": "Normal",
    "sourceName": "Astronaut-Normal.png",
    "sha256": "1c041ccba690e678993054e8ab79637f5d236bd047df87b2512c1d7f62eb39f7"
  },
  "barista-a-happy": {
    "file": "assets/buddies/barista-a-happy.png",
    "canvas": [
      1254,
      1254
    ],
    "bounds": [
      89,
      21,
      1121,
      1233
    ],
    "alphaBBox": [
      89,
      21,
      1210,
      1254
    ],
    "state": "Happy",
    "sourceName": "Barista-A-Happy.png",
    "sha256": "6a6de4558ba56c6197dc0bb0171f9a001a718f43c20e16c6c667d040d2548767"
  },
  "bank-staff-a-normal": {
    "file": "assets/buddies/bank-staff-a-normal.png",
    "canvas": [
      1254,
      1254
    ],
    "bounds": [
      214,
      82,
      887,
      1136
    ],
    "alphaBBox": [
      214,
      82,
      1101,
      1218
    ],
    "state": "Normal",
    "sourceName": "Bank-Staff-A-Normal.png",
    "sha256": "5576bc377d338c487ab7134b6d4fda4935c22a8b959b3ece893ed47b358c6686"
  },
  "professor-normal": {
    "file": "assets/buddies/professor-normal.png",
    "canvas": [
      1254,
      1254
    ],
    "bounds": [
      236,
      144,
      833,
      1067
    ],
    "alphaBBox": [
      236,
      144,
      1069,
      1211
    ],
    "state": "Normal",
    "sourceName": "Professor Normal.png",
    "sha256": "1dde730a000fcfe047df7c56f3b22f6f6d0501294548302e77c65ce87535dc13"
  },
  "professor-happy": {
    "file": "assets/buddies/professor-happy.png",
    "canvas": [
      1254,
      1254
    ],
    "bounds": [
      24,
      50,
      1186,
      1159
    ],
    "alphaBBox": [
      24,
      50,
      1210,
      1209
    ],
    "state": "Happy",
    "sourceName": "Professor Happy.png",
    "sha256": "49b5ebf25e2c56478a9411293d510ca49a88427bbd16e0040335d4b2c0cac21a"
  },
  "professor-surprised": {
    "file": "assets/buddies/professor-surprised.png",
    "canvas": [
      1254,
      1254
    ],
    "bounds": [
      238,
      84,
      830,
      1126
    ],
    "alphaBBox": [
      238,
      84,
      1068,
      1210
    ],
    "state": "Surprised",
    "sourceName": "Professor Surprised.png",
    "sha256": "f2a94e466ee41799379c49975febac2090f916429608b3407e56f89045f76d7e"
  }
};

export const PARK_BUDDIES = [
  {
    "sprite": "astronaut-normal",
    "foot": [
      214,
      380
    ],
    "height": 55,
    "mirror": false
  },
  {
    "sprite": "professor-normal",
    "foot": [
      720,
      388
    ],
    "height": 55,
    "mirror": true
  },
  {
    "sprite": "barista-a-happy",
    "foot": [
      1254,
      450
    ],
    "height": 55,
    "mirror": true
  },
  {
    "sprite": "bank-staff-a-normal",
    "foot": [
      720,
      479
    ],
    "height": 55,
    "mirror": false
  },
  {
    "sprite": "art-student-c-happy",
    "foot": [
      135,
      667
    ],
    "height": 55,
    "mirror": true
  },
  {
    "sprite": "professor-surprised",
    "foot": [
      720,
      601
    ],
    "height": 55,
    "mirror": false
  },
  {
    "sprite": "art-student-d-happy",
    "foot": [
      720,
      705
    ],
    "height": 55,
    "mirror": true
  },
  {
    "sprite": "professor-happy",
    "foot": [
      1318,
      682
    ],
    "height": 55,
    "mirror": false
  },
  {
    "sprite": "art-student-a-happy",
    "foot": [
      688,
      894
    ],
    "height": 55,
    "mirror": false
  },
  {
    "sprite": "art-student-b-happy",
    "foot": [
      750,
      915
    ],
    "height": 55,
    "mirror": true
  }
];
