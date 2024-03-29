# DifficultyChangeEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.DifficultyChangeEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.DifficultyChangeEvent>(event => {
    println("DifficultyChangeEvent ran!");
});
```


## Supertype

DifficultyChangeEvent extends [Event](/neoforge/api/event/Event). That means all methods available in [Event](/neoforge/api/event/Event) are also available in DifficultyChangeEvent

## Properties

|     Name      |                    Type                     | Has Getter | Has Setter |
|---------------|---------------------------------------------|------------|------------|
| difficulty    | [Difficulty](/vanilla/api/world/Difficulty) | true       | false      |
| oldDifficulty | [Difficulty](/vanilla/api/world/Difficulty) | true       | false      |

