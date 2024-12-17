import {Editor} from "@/app/documents/[documentId]/editor";

interface DocumentIdPageProps {
    params: Promise<{
        documentId: string;
    }>
}

const DocumentIdPage =async  ({params}:DocumentIdPageProps) => {
    const documentId = (await params).documentId
    return <div className={'min-h-screen bg-[#fafbfd]'}>
        <Editor/>
    </div>
}


export default DocumentIdPage;