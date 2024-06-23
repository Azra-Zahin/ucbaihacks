import Nav from '../components/Nav'
import {useState} from 'react'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [formData, setFormData] = useState({
        user_id: cookies.UserId,
        first_name: "",
        last_name: "",
        school: "",
        email: "",
        technical_skills: "",
        //dob_day: "",
        // dob_month: "",
        // dob_year: "",
        // show_gender: false,
        // gender_identity: "man",
        // gender_interest: "woman",
        url: "",
        about: "",
        matches: []
        //ADD OTHER MEMBERS?

    })

    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        console.log('submitted')
        e.preventDefault()
        try {
            const response = await axios.put('http://localhost:8000/user', {formData})
            console.log(response)
            const success = response.status === 200
            if (success) navigate('/dashboard')
        } catch (err) {
            console.log(err)
        }

    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <Nav
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
            />

            <div className="profile">
                <h2>CREATE ACCOUNT</h2>

                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="first_name">First Name</label>
                        <input
                            id="first_name"
                            type='text'
                            name="first_name"
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange}
                        />

                        <label htmlFor="last_name">Last Name</label>
                        <input
                            id="last_name"
                            type='text'
                            name="last_name"
                            placeholder="Last Name"
                            required={true}
                            value={formData.last_name}
                            onChange={handleChange}
                        />

                        <label htmlFor="school">School</label>
                        <input
                            id="school"
                            type='text'
                            name="school"
                            placeholder="school"
                            required={true}
                            value={formData.school}
                            onChange={handleChange}
                        />

                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type='text'
                            name="email"
                            placeholder="email"
                            required={true}
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label htmlFor="technical_skills">Technical Skills</label>
                        <input
                            id="technical_skills"
                            type="text"
                            name="technical_skills"
                            required={true}
                            placeholder="Languages, frameworks, tools..."
                            value={formData.tech_skills}
                            onChange={handleChange}
                        />


                        <label htmlFor="about">About me</label>
                        <input
                            id="about"
                            type="text"
                            name="about"
                            required={true}
                            placeholder="I like long walks..."
                            value={formData.about}
                            onChange={handleChange}
                        />

                        <input type="submit"/>
                    </section>

                    <section>
                        
                        <label htmlFor="url">Profile Photo</label>
                        <input
                            //WARNING: READ DOCUMENTATION TO UPLOAD FILES INSTEAD OF URLS
                            type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="photo-container">
                            {formData.url && <img src={formData.url} alt="profile picture preview"/>}
                        </div>


                    </section>

                </form>
            </div>
        </>
    )
}
export default Profile