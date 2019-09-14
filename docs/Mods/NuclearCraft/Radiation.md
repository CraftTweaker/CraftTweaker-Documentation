# Radiation
**Note: The double set of brackets `([...])` is not required here!**

mods.nuclearcraft.radiation.getRadiationLevel(itemInput);
mods.nuclearcraft.radiation.addBlockMutation(blockInput, blockOutput, double radiationThreshold);

mods.nuclearcraft.radiation.setRadiationImmunityGameStages(boolean defaultImmunity, string[] stageNames);

IEntityLivingBase.addRadiation(double amount, @Optional boolean useImmunity);
IEntityLivingBase.setRadiation(double amount, @Optional boolean useImmunity);
IEntityLivingBase.getRadiation();

IEntityLivingBase.addRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase.setRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase.getRadawayBuffer(@Optional boolean slowBuffer);

IEntityLivingBase.addPoisonBuffer(double amount);
IEntityLivingBase.setPoisonBuffer(double amount);
IEntityLivingBase.getPoisonBuffer();

IEntityLivingBase.addRadiationResistance(double amount);
IEntityLivingBase.setRadiationResistance(double amount);
IEntityLivingBase.getRadiationResistance();

IEntityLivingBase.getRawRadiationLevel();
IEntityLivingBase.getRadiationLevel();