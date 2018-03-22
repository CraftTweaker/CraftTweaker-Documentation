# From The Ground Up (FTGU)

## Information

From The Ground Up adds a research tree to the game. It has built in support to allow either stages to but unlocked once you complete
a research or have a research unavailable until a certain stage is achived!

## Research Locked Until Stage Achieved

To check if a stage is achieve you simply need to add "stage": "gamestageName".

```
{
  "display": {
    // Display data
  },
  "parent": "insert id here",
  "idea": {
    // Idea recipe
  },
  "research": {
    // Research recipe
  },
  "unlock": [
    {
      // Item 1
    },
    {
      // Item 2
    }
  ],
  "stage": "Enter GameStage to unlock here"
}
```

## Unlock Stage with Research

Inside the JSON you need to declare "type": "gamestages:stage". Then "stage": "name of the stage you want to unlock", and optionally a message.

```
"unlock": [
	{ 
		"type": "gamestages:stage", 
		"stage": "stageName", 
		"message": "custom message when the tech is researched (OPTIONAL)" 
	}
]
```
