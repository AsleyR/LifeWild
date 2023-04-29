export interface OpenReferences {
    openReferences: boolean;
}

export type OpenReferencesType = {
    openReferences: OpenReferences['openReferences'];
    setOpenReferences: (openReferences: OpenReferences['openReferences']) => void;
}