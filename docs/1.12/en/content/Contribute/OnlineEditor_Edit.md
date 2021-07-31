# Edit Files using GitHub's online editor

## Requirements
You will need to have created a GitHub account and [forked the wiki to your account](/Contribute/SetupGithub).  


## Introduction
GitHub's online editor allows you to change and create files using nothing but your browser.  
It may not be as versatile as [using a local copy](/Contribute/LocalClone/CreateCommit/) but you don't need to worry about [setting up git](/Contribute/LocalClone/InstallingGit/) and all.

This guide will show you how to edit an already existing file using github's online editor.  
You may want to edit the page because you have found a typo or want to include a better example, whatever the reason, feel free to commit changes and eventually [file a Pull Request](/Contribute/PullRequest).  

However, remember that you can only edit the English version, translations are handled via [CrowdIn](https://crowdin.com/project/crafttweaker-documentation/).


## Locate the file
If you want to edit an existing file, you first need to locate it.  


In most cases you can find the file by checking its Wiki Url.  

Rule of thumb: The `#` is the docs folder, everything after that are nested folders and eventually the file.  

For example, the file creating  
<https://docs.blamejared.com/en/#AdvancedFunctions/Arrays_and_Loops/>  
can be found in  
`docs/AdvancedFunctions/Arrays_and_Loops.md`


## Edit the file
After you have successfully located the file, click on it to open it in the GitHub file view.  
Here you can see how the wiki entry will roughly look like, though no navigation bar is present as this is only the entry content.  

Click on the little pen icon to open the editor:
![Edit Button](/Contribute/assets/OnlineEditor_EditButton.png)

The Editor allows you to change your file as you like, and also to directly view a preview with the compiled formatting. This preview will have colored bars on the lefthandside indicating that:  

- Green: This Section was not present on this page before.
- Yellow: This Section was present on this page before but was changed, e.g. a typo was corrected, or additional information was provided.
- Red: This section was present on this page before but was removed.
- None: This section was untouched.

If the syntax of the files is new for you, the wiki uses MarkDown. There should be many tutorials to find using google (or you could add one right here to this wiki if you like).  

## Save/Commit the changes
After you have changed the file you need to let GitHub know that you want to save your changes.  

That's what the commit box below your Editor is for:  
You cannot simply save the file, you need to provide a summary of what you did (commit title) and optionally a short description where you can put additional information like why you did the changes or what exactly was changed.

By default it looks roughly like this:  
![Commit Box Default](/Contribute/assets/OnlineEditor_CommitBox_Default.png)

In this example, the Commit title (or edit summary) is `Update Arrays_and_Loops.md`. GitHub cannot know what your actual changes were supposed to do, so it tries something as generic as this.

You might want to add an additional title or description, but it is not neccessary, though it makes reviewing your Pull request later on easier.


If you have multiple e-mail addresses registered for your GitHub account, you can choose as which one you will create the commit. This will not have any real impact for contributing, though.  
You can also decide whether you want to commit directly to your master branch or rather create a new branch for your commit. In most cases committing to your master branch works just fine.

A filled out example might look like this:
![Commit Box Filled](/Contribute/assets/OnlineEditor_CommitBox_Filled.png)


## What to do next
After you have committed your changes, you can go on and edit or [Create](/Contribute/OnlineEditor_Create) more files using the online editor.  
After you have done all your changes, you can [file a Pull Request](/Contribute/PullRequest).