// useValidator.js
import { ref } from 'vue';
import isEmpty from 'lodash/isEmpty';

export default function useValidator(form) {
    const errors = ref({});
    const isSubmit = ref(false);

    const validationRules = {
        required: {
            message: label => `${label} is required`,
            check: value => {
                return !!value;
            },
        },
        minLength: {
            message: label => `${label}  has to be ${length} characters long `,
            check: (value, length) => {
                return value.length >= length;
            },
        },
        email: {
            message: label => `${label}  is not valid email `,
            check: value => {
                // Email validation logic goes here
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
        },
    };

    const validateField = (key, value, rules, label = '') => {
        for (const rule of rules) {
            const ruleName = rule.name;
            const ruleValue = rule.value;
            const validationFn = validationRules[ruleName];
            if (validationFn && !validationFn.check(value, ruleValue)) {
                errors.value[key] = rule.message || validationFn.message(label);
            }
        }
    };

    const validate = formData => {
        if (!isSubmit.value) return;
        for (const key in formData) {
            const value = formData[key];
            const { label, rules } = form.find(field => field.key === key);
            if (rules) validateField(key, value, rules, label);
        }

        if (!isEmpty(errors.value)) return false;

        return true; // All fields are valid
    };

    return { validate, errors, isSubmit };
}
