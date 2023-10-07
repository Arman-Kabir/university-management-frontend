import StepperForm from "@/components/StepperForm/StepperForm"
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";

const CreateStudentPage = () => {

    const steps = [
        {
            title: 'Student Information',
            content: <StudentInfo></StudentInfo>,
        },
        {
            title: 'Basic Information',
            content: <StudentBasicInfo></StudentBasicInfo>,
        },
        {
            title: 'Guardian Information',
            content: <GuardianInfo></GuardianInfo>,
        },
        {
            title: 'Local Guardian Information',
            content: <LocalGuardianInfo></LocalGuardianInfo>,
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