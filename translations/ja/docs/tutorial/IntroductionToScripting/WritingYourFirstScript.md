# Writing Your First Script

To get started writing your first script, you're going to want to navigate to the scripts folder.  
If you're unsure where that is, take a look at the [What Are Scripts](/tutorial/IntroductionToScripting/WhatAreScripts) page.

Now that we're in the scripts folder, lets make a new file called `script.zs`.

Open `script.zs` in your favourite text editor and put the following piece of code:

```zenscript
println("Hello World!");
```

Now load up Minecraft, or use the `/reload` command and take a look at the `crafttweaker.log` file (If you're unsure of where this is, take a look at [The CraftTweaker Log File](/tutorial/IntroductionToScripting/TheCraftTweakerLogFile) page).

You can ignore all the entries with `[DEBUG]`, what you're looking for is an entry that looks like:

```plaintext
[05:05:41.856][DONE][CLIENT][INFO] Hello World!
```

If you can find the entry, then that's great!  
Your script file has been loaded into the game and you are ready to start actually modifying the game and add new recipes!

If you can't find the entry, that could mean a few things, either your script didn't load or it is possible that you forgot to hit save when you were done writing your script (don't worry! it happens to the best of us!).

To check if your script loaded, try and find a line that looks like:

```plaintext
[05:05:23.365][DONE][CLIENT][INFO] Loading file: script.zs
```

If you can't find it, it means that your script file didn't get loaded, try and make sure that it doesn't have a `.txt` file extension (as discussed in the [What Are Scripts](/tutorial/IntroductionToScripting/WhatAreScripts) page).

Also take a look for any lines that look like:

```plaintext
[05:08:57.688][DONE][CLIENT][ERROR]
```

This could mean that your script file loaded, but there was an error (such as a missing `;` at the end of the line), so just double check the file and make sure that all of it looks good.

If you're still having trouble, then join the [CraftTweaker Discord](https://discord.blamejared.com) server and we can help you there!