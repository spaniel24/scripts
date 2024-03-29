import discord
import requests
import json

client = discord.Client()


@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))


@client.event
async def on_message(message):
    if message.author == client.user:
        return

    r = requests.post(
        'http://localhost:5005/webhooks/rest/webhook',
        json={"sender": message.content, "message": message.content}
    )
    all_lines = r.json()
    message_for_user = ''
    for line in all_lines:
        message_for_user = message_for_user + '\n' + line.get('text')
    await message.channel.send(message_for_user)


client.run('token')
