# Create a Commit

## Prerequisites

You need to have [Cloned the repo to your local disk](/Contribute/LocalClone/Clone).  
You also need to already have changed something within your local clone.

## What will we do

For the sake of learning, we will create a file named `Test.md` which will be available in `AdvancedFunctions/Secret/Test` and add it to mkdocs.yml.

The screenshots are taken from a Sublime Text 3 Editor (unregistered because on a VM), but you can use whatever editor you want to create/modify the files.  
That's one of the advantages of working locally ^^.


Screenshots of the example files:
![Test.md](/Contribute/LocalClone/assets/Example1_TestMD.png)
![mkdocs.yml](/Contribute/LocalClone/assets/Example1_mkdocsYML.png)


## Git status and Git add/stage

The `git status` command tells you which files have been changed.  
In our example it shows us this: 

![Git status call](/Contribute/LocalClone/assets/Example1_Bash_GitStatus.png)

As you can see, we have two sections, modified files and untracked files.
Modified files are files whose content differ from the index (git knows another version of them than you currently have on your computer).  
Untracked files are files that don't yet exist in the index (git doesn't know them yet).

In both cases you can tell git to _stage_ the files using either `git add` or `git stage`:
![Git status call](/Contribute/LocalClone/assets/Example1_Bash_GitStatus2.png)

Now the files are staged to be committed and therefore printed in green.
Notice, that if you were to modify either of those files now you would need to issue the add command again as it only adds the current state to the staging area.


## Git commit

Now that you have added the files you need to create a commit.  
This can be done using the `git commit` command.

When you issue that command, all file states that are currently staged will be combined and added to the index.  
That means that you can create one commit that changes more than one file (something GH's online editor is not capable of).  
Usually you will want to create one commit per logical sector, so if you were to create a PR that adds documentation for ModA, ModB and ModC, you may want to create one commit that adds ModA, one that adds ModB and one that adds ModC.

### Setting git Credentials

If this is the first time you create a commit using git you will see this message:
![Git status call](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_CredentialError.png)

This means that git does not know who you are, so it does not know who the commit author is supposed to be.
So let's run the commands stated in the error message:
```
git config --global user.email "yourEmail"
git config --global user.name "yourName"
```

For the email, use one that has been added to your GH account.  
For the name you can use anything but try to use your GH account name.


### Setting the commit title/message

If your credentials are set correctly, you will get a screen like this:
![Git commit message window](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message1.png)

This is from the text editor GitBash uses for that.  
To enter insert mode (so that you can write something), press the INSERT key.  
Now you can write your commit title (first line) and the commit message (everything below that).  
You can use the ENTER key to create a new line and everything starting with a `#` will be ignored.  

Don't mind the coloring, that's not your concern right now.  
To exit the INSERT mode, press ESC.

Now you need to tell the editor that you are finished.  
You can do that by typing pressing `:x` and pressing ENTER.  

Here's a screen of what this may look like just before pressing enter to leave the editor:
![Git commit message window](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_Message2.png)

### Setting the commit message/title using -m

If you don't like the bash editor or find it hard to remember what keys to press, you can also use the `-m "message"` parameter.
You can open the `"` and leave it unmatched to be able to create line breaks. Finish by typing the maching `"`.  
Like in the editor, everything below the first line is considered part of the commit message.

The same commit message as above could be achieved by doing:
![Git commit using -m](/Contribute/LocalClone/assets/Example1_Bash_GitCommit_MessageParameter.png)


## How to continue

Now that you know how to create commits, you can [push them to your fork](/Contribute/LocalClone/Push/).