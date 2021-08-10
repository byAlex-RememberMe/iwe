import { computed, watch } from "vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'


export function useLoginAndSignupForm() {
	const store = useStore()
	const router = useRouter()
	const { handleSubmit, isSubmitting, submitCount } = useForm();
	const { value: email, errorMessage: eError, handleBlur: eBlur } = useField("email",
		yup
			.string()
			.trim()
			.lowercase()
			.required("Пожалуйста введите email")
			.email("Необходимо ввести корректный email")
	);
	const MIN_LENGTH = 6;
	const MAX_LENGTH = 16;
	const { value: password, errorMessage: pError, handleBlur: pBlur } = useField("password",
		yup
			.string()
			.trim()
			.required("Пожалуйста введите пароль")
			.min(MIN_LENGTH, `Пароль не может быть меньше ${MIN_LENGTH} символов`)
			.max(MAX_LENGTH, `Пароль не может быть длиннее ${MAX_LENGTH} символов`)
	);

	const isTooManyAttempts = computed(() => submitCount.value >= 3);

	watch(isTooManyAttempts, (val) => {
		if (val) {
			setTimeout(() => (submitCount.value = 0), 3000);
		}
	});

	const onSubmitInputsValuesAuth = handleSubmit(async values => {
		try {
			store.commit('setUrlForFirebase', 'signInWithPassword', { root: true }) 
			await store.dispatch('auth/login', values)			
			router.push('/')
		} catch(e){
		}
	});

	const onSubmitInputsValuesSignup =  handleSubmit(async values => {
		try {
			store.commit('setUrlForFirebase', 'signUp', { root: true })
			await store.dispatch('auth/login', values)
			router.push("/")
		} catch(e){
		}
	});

	return {
		email,
		password,
		eError,
		eBlur,
		pError,
		pBlur,
		isSubmitting,
		isTooManyAttempts,
		onSubmitInputsValuesAuth,
		onSubmitInputsValuesSignup
	};
}
