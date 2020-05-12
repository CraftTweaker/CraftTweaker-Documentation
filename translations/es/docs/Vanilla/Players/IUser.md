# IUser

The IUser interface is used internally to combine different userTypes, like the minecraft console, a normal user and command blocks in one type.  
You will probably seldomly need this.

## Importing the package

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.player.IUser;`

## Extending ICommandSender

IUser extends [ICommandSender](/Vanilla/Commands/ICommandSender/). That means all functions available to [ICommandSender](/Vanilla/Commands/ICommandSender/) Objects also are available to IUser Objects.

## Methods

Currently there are no distinct functions for IUser objects.