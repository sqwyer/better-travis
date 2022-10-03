import { CommandInteraction, Client, ApplicationCommandType, ApplicationCommandOptionType } from "discord.js";
import { Command } from "../Command";

export const Say: Command = {
    name: "say",
    description: "Returns a greeting",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "message",
            description: "Tell me something to say",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client: Client, interaction: CommandInteraction) => {
        await interaction.followUp({
            ephemeral: true,
            content: interaction.options.get("message")?.value as string
        });
    }
};