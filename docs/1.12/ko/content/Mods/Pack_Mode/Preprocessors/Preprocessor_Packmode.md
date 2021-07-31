# Packmode Preprocessor

The Packmode Preprocessor will change the script to only be executed if a certain packmode is enabled in the packmode config file

## 호출

You call the Packmode Preprocessor by adding `#packmode mode(s)` to your script file, with `mode(s)` being the pack mode(s) you want the script to run in

## 예제

`#packmode normal expert` would enable the script in normal and expert mode

```zenscript
#packmode normal
import crafttweaker.items.IItemStack;

print("If I appear on your CT-logs, packmode normal is enabled!");
```

## 역할

The Processor will only allow the script to be executed if a certain packmode is enabled.