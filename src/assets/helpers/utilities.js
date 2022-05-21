const form = {
    build(form) {
        const payload = {};
        const inputs = form.querySelectorAll("input:not([type='checkbox'])");

        inputs.forEach(input => {
            if (input.name) {
                payload[input.name] = input.value;
            }
        });

        return payload;
    }
}

export {
    form
}