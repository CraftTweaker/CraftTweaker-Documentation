# EventManager

You can create all event handlers the same way as you do in Crafttweaker:
```
events.eventName(function(event as eventType){
	//Executable Code here
});
```

Below you will find all currently added events that Game Stages should fire.  
None of these events returns anything (they all are void functions).

| EventCall                        | EventType                                                                      |
|----------------------------------|--------------------------------------------------------------------------------|
| onGameStagesAdd                  | [`mods.gamestages.GameStageEventCancelable`](Events/GameStageEvent)            |
| onGameStagesAdded                | [`mods.gamestages.GameStageEvent`](Events/GameStageEvent)                      |
| onGameStagesRemove               | [`mods.gamestages.GameStageEventCancelable`](Events/GameStageEvent)            |
| onGameStagesRemoved              | [`mods.gamestages.GameStageEvent`](Events/GameStageEvent)                      |
| onGameStagesCheck                | [`mods.gamestages.GameStageEventCancelable`](Events/GameStageEvent)            |
