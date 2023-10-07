import StepperForm from "@/components/StepperForm/StepperForm"
import StudentInfo from "@/components/StudentForms/StudentInfo";

const CreateStudentPage = () => {

    const steps = [
        {
            title: 'Student Information',
            content: <StudentInfo></StudentInfo>,
        },
        {
            title: 'Basic Information',
            content: <StudentInfo></StudentInfo>,
        },
        {
            title: 'Guardian Information',
            content: <StudentInfo></StudentInfo>,
        },
        {
            title: 'Local Guardian Information',
            content: <StudentInfo></StudentInfo>,
        }
    ];


    return (
        <div>
            <h1>Create Student</h1>
            <StepperForm steps={steps}>

            </StepperForm>
        </div>
    )
}

export default CreateStudentPage