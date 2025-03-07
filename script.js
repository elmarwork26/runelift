const runes = {
    "FlarpZorcher": { 
        workouts: [
            "Bench Press 3x12, High Knees 4x15m",
            "Incline Press 3x10, Jump Rope 5x30s",
            "Chest Flys 4x12, Sprint Bursts 3x20m"
        ],
        might: 12, speed: 4, 
        rival: "SootTickler: 25 burpees" 
    },
    "GlunkMaw": { 
        workouts: [
            "Deadlifts 4x10, Walking Lunges 3x20",
            "Sumo Deadlifts 3x12, Step-Ups 4x15",
            "Romanian Deadlifts 4x8, Wall Sits 3x30s"
        ],
        might: 15, speed: 3, 
        rival: "FrostGobbo: 30 lunges" 
    },
    "WoopSlinger": { 
        workouts: [
            "Pull-Ups 3x15, Box Jumps 5x10m",
            "Chin-Ups 4x10, Tuck Jumps 3x12",
            "Lat Pulldowns 3x12, Agility Ladder 4x20s"
        ],
        might: 8, speed: 12, 
        rival: "Blurp Shade: 20 squats" 
    },
    "ShinxBrawler": { 
        workouts: [
            "Dumbbell Curls 3x10, Sprints 4x50m",
            "Hammer Curls 4x12, Side Shuffles 3x30m",
            "Preacher Curls 3x15, Hill Runs 5x20m"
        ],
        might: 10, speed: 10, 
        rival: "TwinkleFloop: 15 push-ups" 
    },
    "BongClamper": { 
        workouts: [
            "Overhead Press 4x8, Shuttle Runs 5x100m",
            "Arnold Press 3x12, Sprint Intervals 4x60m",
            "Shoulder Press 4x10, Bounding Jumps 3x15m"
        ],
        might: 14, speed: 6, 
        rival: "YowlDoodle: 25 sit-ups" 
    },
    "RonkStompo": { 
        workouts: [
            "Squats 3x12, Farmer’s Carry 4x20m",
            "Goblet Squats 4x10, Sled Push 3x15m",
            "Front Squats 3x15, Weighted Steps 5x10m"
        ],
        might: 16, speed: 2, 
        rival: "DustNibbler: 30 planks (10s each)" 
    },
    "FizzWobbler": { 
        workouts: [
            "Kettlebell Swings 3x15, Lateral Hops 5x30m",
            "Kettlebell Snatches 4x12, Skater Jumps 3x20",
            "Kettlebell Cleans 3x10, Zigzag Sprints 4x25m"
        ],
        might: 9, speed: 11, 
        rival: "HazeBopper: 20 jumping jacks" 
    },
    "SputFlinger": { 
        workouts: [
            "Russian Twists 4x10, Sprint Intervals 3x80m",
            "Bicycle Crunches 3x20, Hill Sprints 4x30m",
            "Plank Twists 4x15, Fast Feet 5x20s"
        ],
        might: 11, speed: 8, 
        rival: "CrumbZapper: 15 knee-ups" 
    },
    "SploshRager": { 
        workouts: [
            "Push-Ups 3x12, Broad Jumps 4x60m",
            "Clap Push-Ups 4x10, Long Jumps 3x15m",
            "Diamond Push-Ups 3x15, Bounding Runs 5x20m"
        ],
        might: 13, speed: 7, 
        rival: "DripSnarler: 25 mountain climbers" 
    },
    "SquawkZapper": { 
        workouts: [
            "Chin-Ups 3x10, Agility Drills 5x40m",
            "Wide Pull-Ups 4x8, Cone Drills 3x30s",
            "Negative Chin-Ups 3x12, Side Sprints 4x25m"
        ],
        might: 10, speed: 9, 
        rival: "SqueakWiggler: 20 side lunges" 
    },
    "GrogFumbler": { 
        workouts: [
            "Barbell Rows 3x12, Bear Crawls 4x15m",
            "Dumbbell Rows 4x10, Crab Walks 3x20m",
            "T-Bar Rows 3x15, Inchworms 5x10m"
        ],
        might: 14, speed: 5, 
        rival: "MuckSnorf: 25 kettlebell swings" 
    },
    "WispTickler": { 
        workouts: [
            "Tricep Dips 3x15, Sprint Bursts 4x30m",
            "Overhead Tricep Extensions 4x12, High Knees 5x20s",
            "Skull Crushers 3x10, Jump Lunges 4x15"
        ],
        might: 11, speed: 9, 
        rival: "GlowFizzler: 20 dips" 
    },
    "ClankSnorfer": { 
        workouts: [
            "Leg Press 4x12, Shuttle Runs 3x50m",
            "Calf Raises 3x20, Side Shuffles 4x25m",
            "Hack Squats 4x10, Bounding Jumps 5x15m"
        ],
        might: 15, speed: 6, 
        rival: "RustClomper: 30 calf raises" 
    },
    "ZestGobbo": { 
        workouts: [
            "Burpees 3x15, Sprints 4x40m",
            "Mountain Climbers 4x20, Fast Feet 5x30s",
            "Jump Squats 3x12, Lateral Bounds 4x20m"
        ],
        might: 10, speed: 11, 
        rival: "SparkZinger: 25 jump squats" 
    },
    "DuskFloop": { 
        workouts: [
            "Plank Rows 3x12, Agility Ladder 4x20s",
            "Side Planks 4x30s, Zigzag Sprints 3x30m",
            "Renegade Rows 3x10, Skater Jumps 5x15"
        ],
        might: 13, speed: 8, 
        rival: "ShadeWobbler: 20 plank jacks" 
    }
};

const chants = [
    "Rise, ye rune-carved warrior!",
    "Power flows through the ancient etchings!",
    "Carve thy fate with sweat and steel!",
    "The runes sing—lift their anthem!",
    "Unleash the beast within the stone!",
    "Forge thy soul in the fire of might!",
    "Echoes of old fuel thy grind!",
    "Strength is thy rune, wield it bold!",
    "The ancients cheer—lift their legacy!",
    "Crush the void with rune-born fury!"
];

function genWorkout() {
    let goal = document.getElementById("goal").value;
    let r = runes[goal];
    let workout = r.workouts[Math.floor(Math.random() * r.workouts.length)]; // Random workout
    document.getElementById("result").innerHTML = `
        <strong>Rune Workout:</strong> ${workout}<br>
        <strong>Stat Boost:</strong> +${r.might} Might, +${r.speed} Speed<br>
        <strong>Rival Challenge:</strong> ${r.rival}
    `;
}

function genChant() {
    let chant = chants[Math.floor(Math.random() * chants.length)];
    document.getElementById("result").innerHTML = `<strong>Rune Chant:</strong> "${chant}"`;
}