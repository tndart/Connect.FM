export const actionTemplate = (type, payload, meta, tags) => {
    return {
        type,
        payload,
        meta,
        tags
    }
}

export const BaseTags = {
    UI: "[UI]",
    PLAYLIST: "[PLAYLIST]",
    GENRES: "[GENRES]",
    PLAYER: "[PLAYER]",
    API: "[API]"
}