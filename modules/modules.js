import z from 'zod'

export const GiftCard = z.object({
    cardProvider: z.string().min(1),
    monthlyvalue: z.int().gte(0),
    validMerchants: z.string()
})

export const diningHall = z.object({
    baseId: z.int().gt(0),
    kosherLevel : z.string(),
    mealTimes: z.string()
})

export const Soldier = z.object({
    unit : z.string(),
    benefitType: z.enum(["giftCard", "diningHall"]),
    details: z.union([GiftCard, diningHall]),
    decisionReason : z.string(),
    budgetApproved: z.boolean(),
    startDate : z.string().default("")
})

export const bebefit = z.object({
    benefitType: z.enum(["giftCard", "diningHall"]),
    details: z.union([GiftCard, diningHall]),
    decisionReason : z.string(),
    budgetApproved: z.boolean(),
    decisionDate : z.string().default("")
})

export const Budget = z.object({
    unit : z.string(),
    benefitType: z.enum(["giftCard", "diningHall"]),
    month: z.string(),
    allocatedAmount : z.int().gte(0)
})
export const Spend = z.object({
    amount: z.int().gte(0),
    reson: z.string()
})
    