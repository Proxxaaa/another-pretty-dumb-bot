exports.config = {
    ownerOnly: false,
    argsRequired: true,
};


exports.help = {
    name: 'Ban',
    description: 'Bans the mentioned user.',
    usage: 'Ban <@Mention> [Reason]',
};

exports.run = (client, message, args, command) => {
    const toBan = message.guild.member(message.mentions.users.first());
    const banner = message.guild.member(message.author);
    args.shift();
    const reason = args.join(' ');
    console.log(reason);
    if (banner.hasPermission('BAN_MEMBERS')) {
        message.channel.send('Banning ' + toBan.user.tag + ' for the reason: ' + reason);
        toBan.ban(reason);
    }
 else {
        message.channel.send('Sorry! Looks like you don\'t have the permissions to Ban Server Members!');
    }
};