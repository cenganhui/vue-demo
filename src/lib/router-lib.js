import {
    useRouter
} from "vue-router";
import {
    computed
} from "vue";

const routerJump = () => {
    const router = useRouter();
    const toPage = (path) => router.push(path);
    return {
        toPage,
    };
};

const pathToSign = () => {
    // const router = useRouter();
    // const title = ref("I'M");
    // const desc = ref("");
    // watch(router.currentRoute, ({path, name}) => {
    //   const titleCondition = path === "/" ? "I'M" : "";
    //   title.value = titleCondition;

    //   const descCondition = path === "/" ? "CGH" : name;
    //   desc.value = descCondition;
    // }, {
    //   immediate: true
    // });

    // watchEffect(() => {
    //   const { path, name } = router.currentRoute.value;
    //   const titleCondition = path === "/" ? "I'M" : "";
    //   title.value = titleCondition;

    //   const descCondition = path === "/" ? "CGH" : name;
    //   desc.value = descCondition;
    // });

    const router = useRouter();
    const title = computed(() => {
        const {
            path
        } = router.currentRoute.value;
        return path === "/" ? "I'M" : "";
    });
    const desc = computed(() => {
        const {
            path,
            name
        } = router.currentRoute.value;
        return path === "/" ? "CGH" : name;
    });
    return {
        title,
        desc
    }
}


export {
    routerJump,
    pathToSign
}