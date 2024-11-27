import logo from './logo.svg';
import './App.css';
import {EditForm} from './EditForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const editEntries = [
  // {
  //   attribute: "username",
  //   attributeName: "Username",
  //   type: "Text",  // EditEntryType.Text
  //   isRequired: true,
  //   validations: [],
  //   extraParam: null,
  // },
  // {
  //   attribute: "tags",
  //   attributeName: "Tags",
  //   type: "TextList",  // EditEntryType.TextList
  //   isRequired: true,
  //   validations: [],
  //   extraParam: null,
  // },
  {
    attribute: 'pillList',
    attributeName: 'PillList',
    type: 'PillList',
    isRequired: true,
    validations: [],
    extraParam: null, // you can add any extra params you need
  },
  // {
  //   attribute: "contacts",
  //   attributeName: "Contact Details",
  //   type: "DoubleTextList",  // EditEntryType.DoubleTextList
  //   isRequired: false,
  //   validations: [],
  //   extraParam: null,
  // },
  // {
  //   attribute: "bio",
  //   attributeName: "Biography",
  //   type: "TextArea",  // EditEntryType.TextArea
  //   isRequired: false,
  //   validations: [],
  //   extraParam: null,
  // },
  // {
  //   attribute: "resume",
  //   attributeName: "Resume",
  //   type: "File",  // EditEntryType.File
  //   isRequired: false,
  //   validations: [],
  //   extraParam: { supportedFileTypes: ".pdf,.docx" },
  // },
  // {
  //   attribute: "address",
  //   attributeName: "Address",
  //   type: "Address",  // EditEntryType.Address
  //   isRequired: true,
  //   validations: [],
  //   extraParam: null,
  // },
  // {
  //   attribute: "profile_photo",
  //   attributeName: "Profile Photo",
  //   type: "ProfilePhoto",  // EditEntryType.ProfilePhoto
  //   isRequired: true,
  //   validations: [],
  //   extraParam: null,
  // },
  // {
  //   attribute: "gallery",
  //   attributeName: "Photo Gallery",
  //   type: "Photo",  // EditEntryType.Photo
  //   isRequired: false,
  //   validations: [],
  //   extraParam: null,
  // },
  // {
  //   attribute: "profile_picture",
  //   attributeName: "Profile Picture",
  //   type: "FilePhoto",  // EditEntryType.FilePhoto
  //   isRequired: true,
  //   validations: [],
  //   extraParam: { supportedFileTypes: ".jpg,.png" },
  // },
  // {
  //   attribute: "gender",
  //   attributeName: "Gender",
  //   type: "Radio",  // EditEntryType.Radio
  //   isRequired: true,
  //   validations: [],
  //   options: ["Male", "Female", "Other"],
  //   // extraParam: {
  //   //   options: [],
  //   // },
  // },
  // {
  //   attribute: "agree_to_terms",
  //   attributeName: "Agree to Terms",
  //   type: "Checkbox",  // EditEntryType.Checkbox
  //   isRequired: true,
  //   validations: [],
  //   extraParam: null,
  // },
  // {
  //   attribute: "article_content",
  //   attributeName: "Article Content",
  //   type: "Article",  // EditEntryType.Article
  //   isRequired: true,
  //   validations: [],
  //   extraParam: null,
  // },
  // {
  //   attribute: "dob",
  //   attributeName: "Date of Birth",
  //   type: "Date",  // EditEntryType.Date
  //   isRequired: true,
  //   validations: [],
  //   extraParam: null,
  // },
  // {
  //   attribute: "country",
  //   attributeName: "Country",
  //   type: "Select",  // EditEntryType.Select
  //   isRequired: true,
  //   validations: [],
  //   extraParam: {
  //     options: ["United States", "Canada", "Mexico", "Other"],
  //   },
  // },
  // {
  //   attribute: "instagram_showcase",
  //   attributeName: "Instagram Showcase",
  //   type: "Showcase",  // EditEntryType.Showcase
  //   isRequired: true,
  //   validations: [],
  //   extraParam: {
  //     isInstagramShowcase: true,
  //     maxPhotos: 10,
  //   },
  // },
];
const entityObj = {
  username: "user123",
  email: "user@example.com",
  pillList:[]
};

const handleSubmitSuccess = (entity) => {
  console.log("Submission successful", entity);
};

function App() {
  return (
    <Routes>
    <Route
        path="/"
        element={
          <EditForm
            title="Form Title"
            description="Form description"
            editEntries={editEntries}
            entityObj={entityObj}
            onSubmitSuccess={handleSubmitSuccess}
            isSubmitting={false}
          />
        }
      />
      </Routes>
  );
}

export default App;
