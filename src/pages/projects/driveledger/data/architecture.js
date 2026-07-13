import {
    FaMobileAlt,
    FaLayerGroup,
    FaDatabase
} from "react-icons/fa";

import { MdStorage } from "react-icons/md";

export const architecture = [

    {
        id: 1,
        icon: FaMobileAlt,
        title: "Presentation Layer",
        subtitle: "Flutter UI",
        description:
            "Responsive screens built with Flutter including Home, Reports, Add Transaction, Transaction Details, and Settings."
    },

    {
        id: 2,
        icon: FaLayerGroup,
        title: "State Management",
        subtitle: "Provider",
        description:
            "Handles application state, updates UI efficiently, and keeps business logic separate from presentation."
    },

    {
        id: 3,
        icon: MdStorage,
        title: "Repository Layer",
        subtitle: "Repository Pattern",
        description:
            "Acts as the single source for CRUD operations while isolating the UI from database implementation."
    },

    {
        id: 4,
        icon: FaDatabase,
        title: "Local Database",
        subtitle: "SQLite",
        description:
            "Stores transactions locally for fast offline access without requiring an internet connection."
    }

];