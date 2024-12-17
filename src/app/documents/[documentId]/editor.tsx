"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Image from "@tiptap/extension-image";
import StarterKit from "@tiptap/starter-kit";
import ImageResize from "tiptap-extension-resize-image";
import { useEditorStore } from "@/store/use-editor-store";
import { Underline } from "@tiptap/extension-underline";

export const Editor = () => {
  const { setEditor } = useEditorStore();

  const editor = useEditor({
    onCreate: ({ editor }) => {
      setEditor(editor);
    },
    onDestroy: () => {
      setEditor(null);
    },
    onUpdate: ({ editor }) => {
      setEditor(editor);
    },
    onSelectionUpdate: ({ editor }) => {
      setEditor(editor);
    },
    onTransaction: ({ editor }) => {
      setEditor(editor);
    },
    onFocus: ({ editor }) => {
      setEditor(editor);
    },
    onBlur: ({ editor }) => {
      setEditor(editor);
    },
    onContentError: ({ editor }) => {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: "padding-left: 56px; padding-right: 56px;",
        class:
          "focus:outline-none print:border-0 bg-white border border=[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] py-10 pr-14 cursor-text",
      },
    },
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({ nested: true }),
      Table,
      TableCell,
      TableHeader,
      TableRow,
      Image,
      ImageResize,
      Underline,
    ],
    content:
      "   <table>\n" +
      "          <tbody>\n" +
      "            <tr>\n" +
      "              <th>Name</th>\n" +
      '              <th colspan="3">Description</th>\n' +
      "            </tr>\n" +
      "            <tr>\n" +
      "              <td>Cyndi Lauper</td>\n" +
      "              <td>Singer</td>\n" +
      "              <td>Songwriter</td>\n" +
      "              <td>Actress</td>\n" +
      "            </tr>\n" +
      "          </tbody>\n" +
      "        </table>",
  });

  return (
    <div
      className={
        "siz-full overflow-x-auto gb-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible"
      }
    >
      <div
        className={
          "min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0"
        }
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
