// Generated by ts-to-zod
import { z } from "zod";

import * as generated from "./heros.zod";

export type EnemyPower = z.infer<typeof generated.enemyPowerSchema>;

export type SkillsSpeedEnemy = z.infer<typeof generated.skillsSpeedEnemySchema>;

export type Enemy = z.infer<typeof generated.enemySchema>;

export type Superman = z.infer<typeof generated.supermanSchema>;

export type Villain = z.infer<typeof generated.villainSchema>;

export type Story = z.infer<typeof generated.storySchema>;

export type KrytonResponse = z.infer<typeof generated.krytonResponseSchema>;

export type KillSuperman = z.infer<typeof generated.killSupermanSchema>;

export type WithDefaults = z.infer<typeof generated.withDefaultsSchema>;

export type Exported = z.infer<typeof generated.exportedSchema>;

export type GetSupermanSkill = z.infer<typeof generated.getSupermanSkillSchema>;

export type HeroContact = z.infer<typeof generated.heroContactSchema>;

export type SupermanEnemy = z.infer<typeof generated.supermanEnemySchema>;

export type SupermanName = z.infer<typeof generated.supermanNameSchema>;

export type SupermanInvinciblePower = z.infer<
  typeof generated.supermanInvinciblePowerSchema
>;
