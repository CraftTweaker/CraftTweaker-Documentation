# Custom Commands

CraftTweaker allows you to add custom commands. 
This only works prior to 1.12, though. 

## MineTweaker Commands
Generally, a MineTweaker command is called like this:  
`/mt name argument(s)`

And added like this:
```
server.addMineTweakerCommand(name,usage,commandFunction);

server.addMineTweakerCommand(
	//makes the command available as '/mt test'
	"test",

	//on 'mt help' this will be added:
	
	//'/mt test'
	//'    This prints whoever executes this to the log' 
	["/mt test", "    This prints whoever executes this to the log"], 
	
	//creates the ICommand function
	//this requires 2 Parameters: The Arguments given to the command as String[] and the player executing the command.
	function(arguments, player){
		print("Player "~player.name~" executed the MT Command 'Test'");
	});
```

## Normal Commands

A Normal command is called like this:  
`/name argument(s)` or `/alias argument(s)`

And added like this:   
`server.addCommand(name, usage, aliases,validator, completion);`  
`validator` and `completion` are optional.  
`name` and `usage` are both strings.  
`aliases` is a string[].  

Basic example:
```
server.addCommand(
	//makes the command available as '/customCommand1' and as '/cC1'
	//also adds a help message for the two commands.
	"customCommand1", "This might actually do something", ["cC1"], 

	//this is what the command will do
	//it is a function that requires 2 parameters: the arguments provided by the command and the player trying to execute teh command
	function(arguments, player){
		print(player.name~" was naughty");
	});
````

Now we can add a commandValidator to that that checks if the player can execute this command.  
If we don't set this, everyone can execute this command.
```
//same as before, only now with a 2 instead of the 1
server.addCommand("customCommand2", "This might actually do something", ["cC2"], function(arguments, player){print(player.name~" was naughty because he could");},
	
	
	//the command validator is a function that requires 1 argument, that is the player trying to execute the command.
	function(player){

		//only allows players in creative mode to execute the command
		return player.creative;
	}
);
```

Now we can also add a ICommandTabCompletion object.  
This is what helps us with some basic arguments and can be accessed by pressing tab while typing the command.  
```

//this time we're gonna so something with the given arguments
server.addCommand("customCommand3", "This might actually do something", ["cC3"], 
	function(arguments, player){
		print("Player "~player.name~" chose "~arguments[0]~" as first argument");
		player.sendChat("You chose "~arguments[0]~" as your first argument");
	},
	
	function(player){return player.creative;}, 

	//the ICommandValidator is a function that requires 2 parameters:
	//The arguments already provided as well as the player executing the command
	function(command, player){
		return ["Arg1", "2", "Three", player.name] as string[];
	}
);

