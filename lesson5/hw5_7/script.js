let text = (a, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${a}</li>`);
    }
    document.write(`</ul>`);
};

text('some text', 10);
