# MineTweaker synchronization

Ever since MineTweaker 2, it was possible to have the server control the configuration of MineTweaker, with MineTweaker downloading the scripts off the server when joining. In MineTweaker3, this has become the standard and only way of operation, getting rid of the confusion that regularly occured about how to make MineTweaker have its scripts distributed properly.

With MineTweaker 3.1, not only scripts but also assets will be transferred from server to client, and the scripts will only grow larger - having everything sent upon joining every time would consume a lot of unnecessary time and bandwith. Thus, a system is needed to transfer only as much data between server and client as necessary.

The basic idea behind the synchronization system is the following:

* The server holds a list of files currently used to run its scripts and mods. These files can be script files or assets.
* The server keeps a version counter. This version counter increments every time the files are changed and reloaded.
* Clients have a pool of files that were loaded previously, as well as the latest known version counter of the servers it recently connected to, and the list of files to that server. Files used by multiple servers are stored only once.
* Upon joining a server, the client sends the known version counter (if any) to the server. If the versions match, the server acknowledges this and no further files are downloaded
* If the versions are different, the new version counter is sent to the client as well as a list of file hashes.
* The client receives the file hashes and checks if all files are present. A list of missing files is sent to the server. If all files are available, no further files are downloaded.
* The server transmits the contents of any missing files. The client can then carry on.
A single mod file (zip) is considered a set of files, and each of these files are considered separately. If a mod updates and only a few files are modified (which is usually the case), only the changed files need to be sent to the client.