# Registration

This allows you to register custom content for NuclearCraft: Overhauled's multiblocks.
**Note: the `#loader preinit` at the beginning of the script is required.**

## Importing the Package
```zenscript
import mods.nuclearcraft.Registration;
```

## Fission Heat Sink
This method will register a fission heat sink with the registry name `nuclearcraft:heat_sink_<name>` with a cooling value of `<coolingValue>` and the placement rule `placementRule`.
```zenscript
#loader preinit

//mods.nuclearcraft.Registration.registerFissionSink(string name, int coolingValue, string placementRule);
mods.nuclearcraft.Registration.registerFissionSink("extreme", 210, "exactly one sic_sic_cmc sink");
mods.nuclearcraft.Registration.registerFissionSink("sic_sic_cmc", 215, "exactly one lead sink");
```

## Molten Salt Fission Coolant Heater
This method will register a molten salt fission coolant heater with the registry name `nuclearcraft:salt_fission_heater_<name>` with a cooling value of `<coolingValue>` and the placement rule `placementRule`.
It will also register a coolant port for with the registry name `nuclearcraft:coolant_port_<name>` which corresponds to the coolant heater. 
```zenscript
#loader preinit

//mods.nuclearcraft.Registration.registerFissionHeater(string name, string fluidInput, int inputAmount, string fluidOutput, int outputAmount, int coolingValue, string placementRule);
mods.nuclearcraft.Registration.registerFissionHeater("extreme", "tritium", 1, "deuterium", 1, 210, "exactly one sic_sic_cmc heater");
mods.nuclearcraft.Registration.registerFissionHeater("sic_sic_cmc", "helium3", 1, "helium", 1, 215, "exactly one lead heater");
```

## Dynamo Coil
This method will register a dynamo coil with the registry name `nuclearcraft:dynamo_coil_<name>` with an efficiency of `efficiency` and the placement rule `placementRule`.
```zenscript
#loader preinit

//mods.nuclearcraft.Registration.registerTurbineCoil(string name, int efficiency, string placementRule);
mods.nuclearcraft.Registration.registerTurbineCoil("extreme", 1.14, "four of any coil");
mods.nuclearcraft.Registration.registerTurbineCoil("sic_sic_cmc", 1.16, "exactly two axial connectors");
```

## Turbine Rotor Blade
This method will register a turbine rotor blade with the registry name `nuclearcraft:turbine_rotor_blade_<name>` with an efficiency of `<efficiency>` and an expansion coefficient of `expansionCoefficient`.
```zenscript
#loader preinit

//mods.nuclearcraft.Registration.registerTurbineBlade(string name, double efficiency, double expansionCoefficient);
mods.nuclearcraft.Registration.registerTurbineBlade("manganese", 1.05, 1.35);
mods.nuclearcraft.Registration.registerTurbineBlade("copper", 1.15, 1.55);
```

## Turbine Rotor Stator
This method will register a turbine rotor stator with the registry name `nuclearcraft:turbine_rotor_blade_<name>` with an expansion coefficient of `expansionCoefficient`.
```zenscript
#loader preinit

//mods.nuclearcraft.Registration.registerTurbineStator(string name, double expansionCoefficient);
mods.nuclearcraft.Registration.registerTurbineStator("magnesium", 0.6);
mods.nuclearcraft.Registration.registerTurbineStator("boron", 0.85);
```