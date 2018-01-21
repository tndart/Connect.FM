# Connect.FM
## Find your next track


### First of all:
Please read GitGuideForStarting.txt file, if you have no experience working as a team with Git. 

### state:
{
    user: {
        id,
        name,
        auth: [
            googleAuth : {
                token, 
                id
            }
        ]
    },
    player: {
        current: {
            id,
            name,
            artist,
            album,
            duration,
            already played,

        },
        playlist: [ Array of songs ]
    },
    tags: [],
    artists: []
}
