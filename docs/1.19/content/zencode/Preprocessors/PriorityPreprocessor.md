# Priority Preprocessor

The priority preprocessor determines the priority at which scripts in a loader get executed.
The default priority is 10.

Higher priority executes earlier than lower priority. Negative priority is possible.
Scripts with the same priority will be executed in the same order that scripts without the preprocessor do, which is by alphabetical order.

Priority is important for ZenClasses, global variables, or even tags. If your script references another script, make sure the script you're referencing from is already loaded by the time you import values or functions!

## How to use

Simply append `#priority [amount]` to the top of the script.

```zenscript
#loader contenttweaker

#priority 100

import mods.contenttweaker.fluid.FluidBuilder;

new FluidBuilder(false, 0xff0000)
    .build("black_water");

```