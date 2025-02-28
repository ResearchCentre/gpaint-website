import moment from "moment";

const useFormData = (UpdateForm) => {
  console.log("UpdateForm", UpdateForm)
  const FormUpdateJsonStructure = {
    totalpages: 1,
    pages: [
      {
        modalView: false, // For showing modal in Popup
        colSpan: [12, 12, 12, 6], // for 1 column 12, 2 columns 6, 3 columns 4, 4 columns 3 (max 4 columns)
        fields: [
          // Row 1
          [
            {
              id: 1,
              label: "Name",
              type: "text",
              name: "Name",
              Placeholder: "Name",
              value: UpdateForm ? UpdateForm["Name"] : "",
              required: true,
            }, // (0,0,0)
            {
              id: 2,
              label: "User Name",
              type: "text",
              name: "name",
              Placeholder: "User Name",
              value: UpdateForm ? UpdateForm["name"] : "",
              required: true,
            }, // (0,0,1)
          ],

          // Row 2
          [
            {
              id: 3,
              label: "Status",
              type: "number",
              name: "Status",
              Placeholder: "Status",
              value: UpdateForm ? UpdateForm["Status"] : "",
              required: true,
            }, // (1,0,0)
            {
              id: 4,
              label: "Id No",
              type: "text",
              name: "Id",
              Placeholder: "User ID",
              value: UpdateForm ? UpdateForm["Id"] : "",
              required: true,
            }, // (1,0,1)
          ],

          // Row 3
          [
            {
              id: 5,
              label: "Gender",
              type: "radio",
              name: "Gender",
              disabled: false,
              options: ["male", "female"],
              value: UpdateForm ? UpdateForm["Gender"] : "",
              required: true,
            }, // (2,0,0)
            {
              id: 5,
              label: "Date Of Birth",
              type: "date",
              name: "DOB",
              disabled: false,
              value: UpdateForm
                ? moment(UpdateForm["DOB"], "YYYY-MM-DD").format("YYYY-MM-DD")
                : "",
              required: true,
            }, // (2,0,1)
          ],
          [
            {
              id: 7,
              label: "Cancel",
              type: "button",
              position: "end", // position options (end, start, center)
              background: "#ccc",
              textColor: "black",
              event: "click",
              // merge: true,
            },
            {
              id: 7,
              label: "Save",
              type: "button",
              position: "start", // position options (end, start, center)
              background: "red",
              textColor: "white",
              event: "submit",
            },
          ],
        ],
      },
    ],
  };
  return {
    FormUpdateJsonStructure,
  };
};

export default useFormData;


// Plan Period array
export const periodList = [
  { label: "1 Month", value: 1 },
  { label: "2 Month", value: 2 },
  { label: "3 Month", value: 3 },
  { label: "4 Month", value: 4 },
  { label: "5 Month", value: 5 },
  { label: "6 Month", value: 6 },
  { label: "7 Month", value: 7 },
  { label: "8 Month", value: 8 },
  { label: "9 Month", value: 9 },
  { label: "10 Month", value: 10 },
  { label: "11 Month", value: 11 },
  { label: "12 Month", value: 12 },
];

export const subscription_plan = [
  {
    label: "Total users per day",
    boldContent: 100,
    content: "",
    style: ""
  },
  {
    label: "Space preferred",
    boldContent: 2,
    content: "(1 of 2 spaces is created)",
    style: ""
  },
  {
    label: "Chosen period",
    boldContent: "1 Month",
    content: "",
    style: ""
  },
  {
    label: "Storage provided",
    boldContent: "2GB",
    content: "",
    style: "mb-3"
  },
  {
    label: "Subscribed on",
    boldContent: "21st October, 2023; 11:00 AM",
    content: "",
    style: ""
  },
  {
    label: "Auto-renewal will be on",
    boldContent: "21st October, 2023",
    content: "",
    style: ""
  }
]

export const subscription_form = [
  {
    sno: 1,
    total_number_of_users_per_day: ""
  },
  {
    sno: 2,
    number_of_space_you_want_to_handle: ""
  },
  {
    sno: 3,
    subscription_period: ""
  }
]
// Subscription Form
export const subscription_JSON_Format = {
  totalpages: 1,
  title: "Enter your preferred input",
  pages: [
    {
      modalView: false,
      colSpan: [6, 6], // for 1 column 12, 2 columns 6, 3 columns 4, 4 columns 3 (max 4 columns)
      fields: [
        // Row 1
        [
          {
            id: 1,
            label: "Total number of users per day",
            type: "number",
            name: "number_of_users",
            Placeholder: "",
            maxLength: 15,
            value: "",
            required: true,
          },

          {
            id: 2,
            label: "Number of space you want to handle",
            type: "number",
            name: "number_of_space",
            Placeholder: "",
            maxLength: 50,
            value: "",
            required: true,
          },
        ],

        // Row 2
        [
          {
            id: 3,
            label: "Subscription period",
            type: "select",
            name: "period",
            Placeholder: "",
            options: periodList,
            maxLength: 15,
            value: "",
            required: true,
          },

          {
            id: 4,
            label: "Storage provided for this requirement",
            type: "non-input",
            value: 0,
            name: "email",
            Placeholder: "",
            maxLength: 50,
            required: true,
          },
        ],

        // Row 3
        [
          {
            id: 5,
            label: "To Pay",
            type: "non-input",
            value: "$ 50",
            name: "email",
            Placeholder: "",
            maxLength: 50,
            required: false,
          },
          {
            id: 4,
            label: "Proceed to Pay",
            type: "button",
            value: 50,
            name: "email",
            Placeholder: "",
            maxLength: 50,
            required: true,
            colSpan: 12,
            btnFloat: "end",
            btnclassName: "float-end mt-3",
          },
        ],
      ],
    },
  ],
};

// Edit Profile Modal for Personal Data
export const profile_personal_JSON_Format = {
  totalpages: 1,
  title: "",
  pages: [
    {
      modalView: true,
      colSpan: [12, 12, 12, 12, 12], // for 1 column 12, 2 columns 6, 3 columns 4, 4 columns 3 (max 4 columns)
      fields: [
        // Row 1
        [
          {
            id: 1,
            label: "first name",
            type: "text",
            name: "first_name",
            Placeholder: "",
            maxLength: 100,
            value: "",
            required: true,
          },
        ],
        // Row 2

        [
          {
            id: 2,
            label: "Last name",
            type: "text",
            name: "last_name",
            Placeholder: "",
            maxLength: 100,
            value: "",
            required: true,
          },
        ],
        // Row 3
        [
          {
            id: 3,
            label: "Date of Birth",
            type: "date",
            name: "date_of_birth",
            Placeholder: "",
            maxLength: 100,
            value: "",
            required: true,
          },
        ],
        [
          {
            id: 3,
            label: "City",
            type: "text",
            name: "city_name",
            Placeholder: "",
            maxLength: 100,
            value: "",
            required: true,
          },
        ],
        // Row 4

        [
          {
            id: 4,
            label: "Mobile number",
            type: "number",
            name: "mobile_number",
            Placeholder: "",
            maxLength: 15,
            value: "",
            required: true,
          },
        ],
      ],
    },
  ],
};

// Edit Professional Modal for Personal Data
export const profile_professional_JSON_Format = {
  totalpages: 1,
  title: "",
  pages: [
    {
      modalView: true,
      colSpan: [12], // for 1 column 12, 2 columns 6, 3 columns 4, 4 columns 3 (max 4 columns)
      fields: [
        // Row 1
        [
          {
            id: 1,
            label: "Company name",
            type: "text",
            name: "company_name",
            Placeholder: "",
            maxLength: 100,
            value: "",
            required: true,
          },
        ],
        // Row 2
        [
          {
            id: 2,
            label: "Company location",
            type: "text",
            name: "company_location",
            Placeholder: "",
            maxLength: 100,
            value: "",
            required: true,
          },
        ],

        // Row 3
        [
          {
            id: 3,
            label: "Role",
            type: "text",
            name: "role_name",
            Placeholder: "",
            maxLength: 100,
            value: "",
            required: true,
          },
        ],

        // Row 4
        [
          // {
          //   id: 5,
          //   label: "Cancel",
          //   type: "button",
          //   name: "cancel",
          //   Placeholder: "",
          //   required: true,
          // },

          // {
          //   id: 6,
          //   label: "Save",
          //   type: "button",
          //   name: "save",
          //   Placeholder: "",
          //   required: true,
          // },
        ],
      ],
    },
  ],
};
