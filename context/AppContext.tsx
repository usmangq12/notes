import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactElement,
  ReactNode,
} from "react";

export type INote = {
  id: number;
  title: string;
  note: string;
  background: string;
};

export type IAppContext = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  note: string;
  setNote: Dispatch<SetStateAction<string>>;
  notes: INote[];
  setNotes: Dispatch<SetStateAction<INote[]>>;
  mode: string;
  setMode: Dispatch<SetStateAction<string>>;
  searchKeywords: string;
  setSearchKeywords: Dispatch<SetStateAction<string>>;
  selectedNoteId: string;
  setSelectedNoteId: Dispatch<SetStateAction<string>>;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  background: string;
  setBackground: Dispatch<SetStateAction<string>>;
  viewType: string;
  setViewType: Dispatch<SetStateAction<string>>;
};

export const NoteContext = createContext<IAppContext | null>(null);

export const AppContext = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [notes, setNotes] = useState<INote[]>([]);
  const [mode, setMode] = useState<string>("Home");
  const [selectedNoteId, setSelectedNoteId] = useState<string>("");
  const [searchKeywords, setSearchKeywords] = useState<string>("");
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [background, setBackground] = useState<string>("");
  const [viewType, setViewType] = useState<string>("list");

  return (
    <NoteContext.Provider
      value={{
        title,
        setTitle,
        note,
        setNote,
        notes,
        setNotes,
        mode,
        setMode,
        searchKeywords,
        setSearchKeywords,
        selectedNoteId,
        setSelectedNoteId,
        modalVisible,
        setModalVisible,
        background,
        setBackground,
        viewType,
        setViewType,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};
