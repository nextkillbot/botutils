/*
 
 Created by: @Killbot
 Inspired by: Arch4

 Note:
 This file / module will be replacing the current module [Arch4.js] in a better way
 More functions will be added, but the parameters were easy to use...
 
 ...if you're Killbot obviously
  */

let Milly = {};

Milly.Preferences = {
    EnableStyleOutput: true,
    EnableDebug: false,

    LogStyler: [
        "background-color: #210015;",
        "color: #FF8AD7;",
        "font-family: monospace;",
        "font-size: 1.5em;",
        "font-weight: bold;",
        "text-shadow: 0 0 0.25em #FF00AA, 0 0 0.5em #FF00AA, 0 0 1em #FF00AA;",

        "padding-top: 0.35em;",
        "padding-bottom: 0.35em;",
        "padding-left: 0.3em;",
        "padding-right: 0.3em;",

        "border-left: 0.25em solid #FF00AA;"
    ],
    FaceStyler: [
        "background-color: #1C0012;",
        "color: #FF8AD7;",
        "border: 2.5px solid #5c5c5c;",
        "font-size: 2.75em;",

        "padding: 0.25em;",

        "text-shadow: 0 0 0.15em #FF00AA, 0 0 0.35em #FF00AA;"
    ],

    Accessory: {
        Start: "~★ ●|",
        End: "|● ★~"
    },

    ModuleInfo: {
        Version: "0.02_03",
        Build: "ARX-02.3"
    }
};

// Output message
/*
    Point to note: These faces were sent to me by these users:
    - @emiy.172_
    - @tico628
    - @root301916
*/
let Faces = [
    `OwO`,
    `-∪-`,
    `∩_∩`,
    `>w<`,
    `>_<`,
    `>∪<`,
    `•w•`,
    `>~<`,
    `-∩-`,
    `-w-`,
    `°~°`,
    `(๑‸๑)`,
    `(ᵔ⤙ᵔ)`,
    `●.<"`,
    `(˶–ᴗ𖧹˶)`,
    `•o•`,
    `;w;`,
    `T^T`,
    `:]`,
    `:v`,
    `:3`,
    `:^`,
    `;~;`,
    `∩3∩`,
    `$w$`,
    `:P`,
    `:³`,
    `*O*`,
    `^w^`,
    `:⁰`,
    `@.@`,
    `:<`
];

// Built-in functions; Do not modify these whatsoever
let FUNC_BUILT = {};
FUNC_BUILT.RETURN_MSG = function (MESSAGE_CONTENT, MESSAGE_TYPE) {
    switch (MESSAGE_TYPE) {
        case "log":
            console.log(
                `${Milly.Preferences.Accessory.Start} [LOG] |> ${MESSAGE_CONTENT} ${Milly.Preferences.Accessory.End}`
            );
            break;
        case "warn":
            console.warn(
                `${Milly.Preferences.Accessory.Start} [WARN] |> ${MESSAGE_CONTENT} ${Milly.Preferences.Accessory.End}`
            );
            break;
        case "error":
        case "err":
            console.error(
                `${Milly.Preferences.Accessory.Start} [ERROR] |> ${MESSAGE_CONTENT} ${Milly.Preferences.Accessory.End}`
            );
            break;
        default:
            console.error(`${Object.keys({ MESSAGE_TYPE })[0]}: Expected "log", "warn" or "error".`);
            break;
    }
};
FUNC_BUILT.RETURN_SIMPLE_MSG = function (MESSAGE_CONTENT, MESSAGE_TYPE) {
    switch (MESSAGE_TYPE) {
        case "log":
            console.log(MESSAGE_CONTENT);
            break;
        case "warn":
            console.warn(MESSAGE_CONTENT);
            break;
        case "error":
        case "err":
            console.error(MESSAGE_CONTENT);
            break;
        default:
            console.error(`${Object.keys({ MESSAGE_TYPE })[0]}: Expected "log", "warn" or "error".`);
            break;
    }
};
FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER = function (MESSAGE_CONTENT, MESSAGE_TYPE, STYLER) {
    switch (MESSAGE_TYPE) {
        case "log":
            console.log(`%c${MESSAGE_CONTENT}`, STYLER);
            break;
        case "warn":
            console.warn(`%c${MESSAGE_CONTENT}`, STYLER);
            break;
        case "error":
        case "err":
            console.error(`%c${MESSAGE_CONTENT}`, STYLER);
            break;
        default:
            console.error(`${Object.keys({ MESSAGE_TYPE })[0]}: Expected "log", "warn" or "error".`);
            break;
    }
};
FUNC_BUILT.RETURN_STYLE_MSG = function (MESSAGE_CONTENT, MESSAGE_TYPE, STYLER) {
    switch (MESSAGE_TYPE) {
        case "log":
            console.log(
                `%c${Milly.Preferences.Accessory.Start} [LOG] |> ${MESSAGE_CONTENT} ${Milly.Preferences.Accessory.End}`,
                STYLER
            );
            break;
        case "warn":
            console.warn(
                `%c${Milly.Preferences.Accessory.Start} [WARN] |> ${MESSAGE_CONTENT} ${Milly.Preferences.Accessory.End}`,
                STYLER
            );
            break;
        case "error":
        case "err":
            console.error(
                `%c${Milly.Preferences.Accessory.Start} [ERROR] |> ${MESSAGE_CONTENT} ${Milly.Preferences.Accessory.End}`,
                STYLER
            );
            break;
        default:
            console.error(`${Object.keys({ MESSAGE_TYPE })[0]}: Expected "log", "warn" or "error".`);
            break;
    }
};
FUNC_BUILT.PARSE_STYLE = function (STYLER) {
    let STYLE_ELEMENT;
    for (let Index = 0; Index < STYLER.length; STYLER++) {
        STYLE_ELEMENT = STYLER;
    }
    return STYLE_ELEMENT.join(" ");
};
FUNC_BUILT.NUMBER_CONVERSION = function (NUMBER) {
    if (NUMBER < 10) {
        return `0${NUMBER}`.toString();
    } else {
        return NUMBER.toString();
    }
};
FUNC_BUILT.PARSE_FACIALS = function () {
    let Parser = Math.floor(Math.random() * Faces.length);

    return Faces[Parser];
};

switch (Milly.Preferences.EnableStyleOutput) {
    case true:
        try {
            console.log(
                `%c${Milly.Preferences.Accessory.Start} Milly / milly.js |=| v${Milly.Preferences.ModuleInfo.Version} build ${Milly.Preferences.ModuleInfo.Build} ${Milly.Preferences.Accessory.End}`,
                FUNC_BUILT.PARSE_STYLE(Milly.Preferences.LogStyler)
            );
            console.log(`%c${FUNC_BUILT.PARSE_FACIALS()}`, FUNC_BUILT.PARSE_STYLE(Milly.Preferences.FaceStyler));
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Cannot launch milly.js, error info:`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(`>> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(`>> Error details: ${Error.message}`, "err");
        }
        break;
    case false:
        try {
            console.log(
                `${Milly.Preferences.Accessory.Start} Milly / milly.js |=| v${Milly.Preferences.ModuleInfo.Version} build ${Milly.Preferences.ModuleInfo.Build} ${Milly.Preferences.Accessory.End}`
            );
            console.log(FUNC_BUILT.PARSE_FACIALS());
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Cannot launch milly.js, error info:`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(`>> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(`>> Error details: ${Error.message}`, "err");
        }
        break;
    default:
        console.error(`${Object.keys(Milly.Preferences)[0]}: Expected "true" or "false".`);
        null;
        break;
}

/* PLATONIC FUNCTIONS: TEMPLATES */
/*
    function CoreFunction(Element) {
        try {
            // Function here
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`NameOfFunction: An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`NameOfFunction: Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`NameOfFunction: An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
*/

// Main functions
// TEXT
Milly.Text = {};
Milly.Text.Set = function (ObjectName, NewText, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            Element.innerHTML = NewText;
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Text.Set(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Text.Set(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Text.Set(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Text.Create = function (ParentName, TextType, NewText, TypeParent, ParentAmount) {
    function CoreFunction(Element) {
        try {
            let NewTextElement = document.createElement(TextType);
            NewTextElement.innerHTML = NewText;

            Element.appendChild(NewTextElement);

            return NewTextElement;
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Text.Create(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Text.Create(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeParent) {
        case "class":
        case "c":
            let ClassParent = document.getElementsByClassName(ParentName)[ParentAmount];
            return {
                ReturnElement: ClassParent,
                TextElement: CoreFunction(ClassParent)
            };
            break;

        case "id":
        case "i":
            let IdParent = document.querySelectorAll(`#${ParentName}`)[ParentAmount];
            return {
                ReturnElement: IdParent,
                TextElement: CoreFunction(IdParent)
            };
            break;
        case "tag":
        case "t":
            let TagParent = document.getElementsByTagName(ParentName)[ParentAmount];
            return {
                ReturnElement: TagParent,
                TextElement: CoreFunction(TagParent)
            };
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ParentName)[ParentAmount];
            let Id = document.querySelectorAll(`#${ParentName}`)[ParentAmount];
            let Tag = document.getElementsByTagName(ParentName)[ParentAmount];

            if (Class !== undefined) {
                return {
                    ReturnElement: Class,
                    TextElement: CoreFunction(Class)
                };
            } else if (Id !== undefined) {
                return {
                    ReturnElement: Id,
                    TextElement: CoreFunction(Id)
                };
            } else if (Tag !== undefined) {
                return {
                    ReturnElement: Tag,
                    TextElement: CoreFunction(Tag)
                };
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Text.Create(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeParent })[0]}: Unknown argument called '${TypeParent}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeParent })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Text.Get = function (ObjectName, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            return Element.innerHTML;
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Text.Get(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Text.Get(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: ClassObject,
                Text: CoreFunction(ClassObject)
            };
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            return {
                ReturnObject: IdObject,
                Text: CoreFunction(IdObject)
            };
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: TagObject,
                Text: CoreFunction(TagObject)
            };
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                return {
                    ReturnObject: Class,
                    Text: CoreFunction(Class)
                };
            } else if (Id !== undefined) {
                return {
                    ReturnObject: Id,
                    Text: CoreFunction(Id)
                };
            } else if (Tag !== undefined) {
                return {
                    ReturnObject: Tag,
                    Text: CoreFunction(Tag)
                };
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Text.Get(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};

// STYLES
Milly.Style = {};
Milly.Style.ApplySingular = function (ObjectName, StyleName, StyleValue, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            Element.style.setProperty(StyleName, StyleValue);
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Style.ApplySingular(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Style.ApplySingular(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Style.ApplySingular(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Style.ApplyMultiple = function (ObjectName, StyleValue, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            Object.assign(Element.style, StyleValue);
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Style.ApplySingular(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Style.ApplyMultiple(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Style.ApplySingular(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Style.Get = function (ObjectName, StyleName, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            return window.getComputedStyle(Element).getPropertyValue(StyleName);
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Style.Get(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Style.Get(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: ClassObject,
                StyleValue: CoreFunction(ClassObject)
            };
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            return {
                ReturnObject: IdObject,
                StyleValue: CoreFunction(IdObject)
            };
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: TagObject,
                StyleValue: CoreFunction(TagObject)
            };
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                return {
                    ReturnObject: Class,
                    StyleValue: CoreFunction(Class)
                };
            } else if (Id !== undefined) {
                return {
                    ReturnObject: Id,
                    StyleValue: CoreFunction(Id)
                };
            } else if (Tag !== undefined) {
                return {
                    ReturnObject: Tag,
                    StyleValue: CoreFunction(Tag)
                };
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Style.Get(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Style.DeleteSingular = function (ObjectName, StyleName, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            Element.style.removeProperty(StyleName);
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Style.DeleteSingular(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Style.DeleteSingular(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Style.DeleteSingular(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};

// INPUTS
Milly.Input = {};
Milly.Input.Get = function (ObjectName, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            return Element.value;
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Get.Input(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Input.Get(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: ClassObject,
                Value: CoreFunction(ClassObject)
            };
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            return {
                ReturnObject: IdObject,
                Value: CoreFunction(IdObject)
            };
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: TagObject,
                Value: CoreFunction(TagObject)
            };
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                return {
                    ReturnObject: Class,
                    Value: CoreFunction(Class)
                };
            } else if (Id !== undefined) {
                return {
                    ReturnObject: Id,
                    Value: CoreFunction(Id)
                };
            } else if (Tag !== undefined) {
                return {
                    ReturnObject: Tag,
                    Value: CoreFunction(Tag)
                };
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Input.Get(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Input.GetFile = function (ObjectName, TypeObject, FileType, FileOrder, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            let Files = Element.files;

            switch (FileType) {
                case "file":
                case "f":
                    Reader = new FileReader();

                    Reader.onload(function () {
                        Reader.result;

                        return Reader.readAsText(Files[FileOrder]);
                    });

                    break;
                case "image":
                case "i":
                    let Image = URL.createObjectURL(Files[FileOrder]);
                    return Image;

                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Get.Input(): An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys({ TypeObject })[0]}: Unknown argument called '${FileType}'.`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys({ TypeObject })[0]}: Expected "file / f" or "image / i".`,
                        "err"
                    );
                    break;
            }
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Get.Input(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Input.GetFile(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: ClassObject,
                Value: CoreFunction(ClassObject)
            };
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            return {
                ReturnObject: IdObject,
                Value: CoreFunction(IdObject)
            };
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: TagObject,
                Value: CoreFunction(TagObject)
            };
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                return {
                    ReturnObject: Class,
                    Value: CoreFunction(Class)
                };
            } else if (Id !== undefined) {
                return {
                    ReturnObject: Id,
                    Value: CoreFunction(Id)
                };
            } else if (Tag !== undefined) {
                return {
                    ReturnObject: Tag,
                    Value: CoreFunction(Tag)
                };
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Input.GetFile(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Input.Set = function (ObjectName, NewValue, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            Element.value = NewValue
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Get.Input(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Input.Set(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Input.Set(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};

// ATTRIBUTES
Milly.Attribute = {};
Milly.Attribute.Apply = function (ObjectName, AttributeName, AttributeValue, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            Element.setAttribute(AttributeName, AttributeValue);
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Attribute.Apply(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Attribute.Apply(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Attribute.Apply(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Attribute.Get = function (ObjectName, AttributeName, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            return Element.getAttribute(AttributeName);
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Attribute.Get(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Attribute.Get(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: ClassObject,
                AttributeValue: CoreFunction(ClassObject)
            };
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            return {
                ReturnObject: IdObject,
                AttributeValue: CoreFunction(IdObject)
            };
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: TagObject,
                AttributeValue: CoreFunction(TagObject)
            };
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                return {
                    ReturnObject: Class,
                    AttributeValue: CoreFunction(Class)
                };
            } else if (Id !== undefined) {
                return {
                    ReturnObject: Id,
                    AttributeValue: CoreFunction(Id)
                };
            } else if (Tag !== undefined) {
                return {
                    ReturnObject: Tag,
                    AttributeValue: CoreFunction(Tag)
                };
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Attribute.Get(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Attribute.Delete = function (ObjectName, AttributeName, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            Element.removeAttribute(AttributeName);
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Attribute.Delete(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Attribute.Delete(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: ClassObject,
                AttributeValue: CoreFunction(ClassObject)
            };
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            return {
                ReturnObject: IdObject,
                AttributeValue: CoreFunction(IdObject)
            };
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            return {
                ReturnObject: TagObject,
                AttributeValue: CoreFunction(TagObject)
            };
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                return {
                    ReturnObject: Class,
                    AttributeValue: CoreFunction(Class)
                };
            } else if (Id !== undefined) {
                return {
                    ReturnObject: Id,
                    AttributeValue: CoreFunction(Id)
                };
            } else if (Tag !== undefined) {
                return {
                    ReturnObject: Tag,
                    AttributeValue: CoreFunction(Tag)
                };
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Attribute.Delete(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};

// ELEMENTS
Milly.Element = {};
Milly.Element.Create = function (ParentName, NewElement, AttributeName, AttributeValue, TypeParent, ParentAmount) {
    function CoreFunction(Element) {
        try {
            let CreatedElement = document.createElement(NewElement);
            CreatedElement.setAttribute(AttributeName, AttributeValue);

            Element.appendChild(CreatedElement);

            return CreatedElement;
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Create(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Element.Create(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeParent) {
        case "class":
        case "c":
            let ClassParent = document.getElementsByClassName(ParentName)[ParentAmount];
            return {
                CreatedObject: CoreFunction(ClassParent),
                ParentObject: ClassParent
            };
            break;

        case "id":
        case "i":
            let IdParent = document.querySelectorAll(`#${ParentName}`)[ParentAmount];
            return {
                CreatedObject: CoreFunction(IdParent),
                ParentObject: IdParent
            };
            return IdParent;
            break;

        case "tag":
        case "t":
            let TagParent = document.getElementsByTagName(ParentName)[ParentAmount];
            return {
                CreatedObject: CoreFunction(TagParent),
                ParentObject: TagParent
            };
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ParentName)[ParentAmount];
            let Id = document.querySelectorAll(`#${ParentName}`)[ParentAmount];
            let Tag = document.getElementsByTagName(ParentName)[ParentAmount];

            if (Class !== undefined) {
                return {
                    CreatedObject: CoreFunction(Class),
                    ParentObject: Class
                };
            } else if (Id !== undefined) {
                return {
                    CreatedObject: CoreFunction(Id),
                    ParentObject: Id
                };
            } else if (Tag !== undefined) {
                return {
                    CreatedObject: CoreFunction(Tag),
                    ParentObject: Tag
                };
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Create(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeParent })[0]}: Unknown argument called '${TypeParent}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeParent })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Element.Delete = function (ObjectName, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            Element.parentNode.removeChild(Element);
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Delete(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Element.Delete(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Delete(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Element.Get = function (ObjectName, TypeObject) {
    function CoreFunction(Element) {
        try {
            return Element;
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Get(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Element.Get(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName);
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`);
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName);
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName);
            let Id = document.querySelectorAll(`#${ObjectName}`);
            let Tag = document.getElementsByTagName(ObjectName);

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Get(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Element.Clone = function (
    ObjectName,
    NewParent,
    WithChildren,
    TypeObject,
    TypeNewParent,
    ObjectAmount,
    ParentAmount
) {
    function CoreFunction(Element) {
        switch (WithChildren) {
            case true:
                switch (TypeNewParent) {
                    case "class":
                    case "c":
                        let ClassParent = document.getElementsByClassName(NewParent)[ParentAmount];

                        try {
                            let CloneElement = Element.cloneNode(true);

                            ClassParent.appendChild(CloneElement);

                            return CloneElement;
                        } catch (Error) {
                            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
                        } finally {
                            switch (Milly.Preferences.EnableDebug) {
                                case true:
                                    FUNC_BUILT.RETURN_MSG(`Milly.Element.Clone(): Executed at ${ClassParent}`, "log");
                                    FUNC_BUILT.RETURN_MSG(
                                        `Milly.Element.Clone(): Executed at ${Element} as a child`,
                                        "log"
                                    );
                                    break;
                                case false:
                                    break;
                                default:
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                                        "err"
                                    );
                                    break;
                            }
                        }
                    case "id":
                    case "i":
                        let IdParent = document.querySelectorAll(`.${NewParent}`)[ParentAmount];

                        try {
                            let CloneElement = Element.cloneNode(true);

                            IdParent.appendChild(CloneElement);

                            return CloneElement;
                        } catch (Error) {
                            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
                        } finally {
                            switch (Milly.Preferences.EnableDebug) {
                                case true:
                                    FUNC_BUILT.RETURN_MSG(`Milly.Element.Clone(): Executed at ${IdParent}`, "log");
                                    FUNC_BUILT.RETURN_MSG(
                                        `Milly.Element.Clone(): Executed at ${Element} as a child`,
                                        "log"
                                    );
                                    break;
                                case false:
                                    break;
                                default:
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                                        "err"
                                    );
                                    break;
                            }
                        }
                    case "tag":
                    case "t":
                        let TagParent = document.getElementsByTagNameName(NewParent)[ParentAmount];

                        try {
                            let CloneElement = Element.cloneNode(true);

                            TagParent.appendChild(CloneElement);

                            return CloneElement;
                        } catch (Error) {
                            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
                        } finally {
                            switch (Milly.Preferences.EnableDebug) {
                                case true:
                                    FUNC_BUILT.RETURN_MSG(`Milly.Element.Clone(): Executed at ${TagParent}`, "log");
                                    FUNC_BUILT.RETURN_MSG(
                                        `Milly.Element.Clone(): Executed at ${Element} as a child`,
                                        "log"
                                    );
                                    break;
                                case false:
                                    break;
                                default:
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                                        "err"
                                    );
                                    break;
                            }
                        }
                        break;
                    case "free":
                    case "f":
                        let _Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
                        let _Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
                        let _Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

                        if (_Class !== undefined) {
                            try {
                                let CloneElement = Element.cloneNode(true);
                                _Tag.appendChild(CloneElement);

                                return CloneElement;
                            } catch (Error) {
                                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
                            } finally {
                                switch (Milly.Preferences.EnableDebug) {
                                    case true:
                                        FUNC_BUILT.RETURN_MSG(`Milly.Element.Clone(): Executed at ${_Class}`, "log");
                                        FUNC_BUILT.RETURN_MSG(
                                            `Milly.Element.Clone(): Executed at ${Element} as a child`,
                                            "log"
                                        );
                                        break;
                                    case false:
                                        break;
                                    default:
                                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                                            "err"
                                        );
                                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                                            "err"
                                        );
                                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                                            "err"
                                        );
                                        break;
                                }
                            }
                        } else if (_Id !== undefined) {
                            let CloneElement = Element.cloneNode(true);
                            _Id.appendChild(CloneElement);

                            return CloneElement;

                            try {
                                let CloneElement = Element.cloneNode(true);
                                _Id.appendChild(CloneElement);

                                return CloneElement;
                            } catch (Error) {
                                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
                            } finally {
                                switch (Milly.Preferences.EnableDebug) {
                                    case true:
                                        FUNC_BUILT.RETURN_MSG(`Milly.Element.Clone(): Executed at ${_Id}`, "log");
                                        FUNC_BUILT.RETURN_MSG(
                                            `Milly.Element.Clone(): Executed at ${Element} as a child`,
                                            "log"
                                        );
                                        break;
                                    case false:
                                        break;
                                    default:
                                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                                            "err"
                                        );
                                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                                            "err"
                                        );
                                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                                            "err"
                                        );
                                        break;
                                }
                            }
                        } else if (_Tag !== undefined) {
                            try {
                                let CloneElement = Element.cloneNode(true);
                                _Tag.appendChild(CloneElement);

                                return CloneElement;
                            } catch (Error) {
                                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
                            } finally {
                                switch (Milly.Preferences.EnableDebug) {
                                    case true:
                                        FUNC_BUILT.RETURN_MSG(`Milly.Element.Clone(): Executed at ${_Tag}`, "log");
                                        FUNC_BUILT.RETURN_MSG(
                                            `Milly.Element.Clone(): Executed at ${Element} as a child`,
                                            "log"
                                        );
                                        break;
                                    case false:
                                        break;
                                    default:
                                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                                            "err"
                                        );
                                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                                            "err"
                                        );
                                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                                            "err"
                                        );
                                        break;
                                }
                            }
                        }
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys({ TypeNewParent })[0]}: Unknown argument called '${TypeNewParent}'.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys({ TypeNewParent })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                            "err"
                        );
                        break;
                }
                break;
            case false:
                switch (TypeNewParent) {
                    case "class":
                    case "c":
                        let ClassParent = document.getElementsByClassName(NewParent)[ParentAmount];

                        try {
                            let CloneElement = Element.cloneNode(false);

                            ClassParent.appendChild(CloneElement);

                            return CloneElement;
                        } catch (Error) {
                            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
                        } finally {
                            switch (Milly.Preferences.EnableDebug) {
                                case true:
                                    FUNC_BUILT.RETURN_MSG(`Milly.Element.Clone(): Executed at ${Element}`, "log");
                                    break;
                                case false:
                                    break;
                                default:
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                                        "err"
                                    );
                                    break;
                            }
                        }
                    case "id":
                    case "i":
                        let IdParent = document.querySelectorAll(`.${NewParent}`)[ParentAmount];

                        try {
                            let CloneElement = Element.cloneNode(false);

                            IdParent.appendChild(CloneElement);

                            return CloneElement;
                        } catch (Error) {
                            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
                        } finally {
                            switch (Milly.Preferences.EnableDebug) {
                                case true:
                                    FUNC_BUILT.RETURN_MSG(`Milly.Element.Clone(): Executed at ${Element}`, "log");
                                    break;
                                case false:
                                    break;
                                default:
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                                        "err"
                                    );
                                    break;
                            }
                        }
                    case "tag":
                    case "t":
                        let TagParent = document.getElementsByTagName(NewParent)[ParentAmount];

                        try {
                            let CloneElement = Element.cloneNode(false);

                            TagParent.appendChild(CloneElement);

                            return CloneElement;
                        } catch (Error) {
                            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
                        } finally {
                            switch (Milly.Preferences.EnableDebug) {
                                case true:
                                    FUNC_BUILT.RETURN_MSG(`Milly.Element.Clone(): Executed at ${Element}`, "log");
                                    break;
                                case false:
                                    break;
                                default:
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                                        "err"
                                    );
                                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                                        "err"
                                    );
                                    break;
                            }
                        }
                        break;
                    case "free":
                    case "f":
                        let _Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
                        let _Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
                        let _Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

                        if (_Class !== undefined) {
                            let CloneElement = Element.cloneNode(true);
                            _Class.appendChild(CloneElement);

                            return CloneElement;
                        } else if (_Id !== undefined) {
                            let CloneElement = Element.cloneNode(true);
                            _Id.appendChild(CloneElement);

                            return CloneElement;
                        } else if (_Tag !== undefined) {
                            let CloneElement = Element.cloneNode(true);
                            _Tag.appendChild(CloneElement);

                            return CloneElement;
                        }
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys({ TypeNewParent })[0]}: Unknown argument called '${TypeNewParent}'.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys({ TypeNewParent })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                            "err"
                        );
                        break;
                }
                break;
            default:
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(
                    `${Object.keys({ WithChildren })[0]}: Unknown argument called '${WithChildren}'.`,
                    "err"
                );
                FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys({ WithChildren })[0]}: Expected "true" or "false".`, "err");
                break;
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            return {
                ReturnElement: ClassObject,
                CloneElement: CoreFunction(ClassObject)
            };
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            return {
                ReturnElement: IdObject,
                CloneElement: CoreFunction(IdObject)
            };
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            return {
                ReturnElement: TagObject,
                CloneElement: CoreFunction(TagObject)
            };
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                return {
                    ReturnElement: Class,
                    CloneElement: CoreFunction(Tag)
                };
            } else if (Id !== undefined) {
                return {
                    ReturnElement: Id,
                    CloneElement: CoreFunction(Id)
                };
            } else if (Tag !== undefined) {
                return {
                    ReturnElement: Tag,
                    CloneElement: CoreFunction(Tag)
                };
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Element.Clone(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};

// EVENTS
Milly.Events = {};
Milly.Events.Add = function (ObjectName, EventName, EventFunction, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            Element.addEventListener(EventName, EventFunction);
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Events.Add(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Events.Add(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Events.Add(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Events.Remove = function (ObjectName, EventName, EventFunction, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            Element.removeEventListener(EventName, EventFunction);
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Events.Remove(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Events.Remove(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Events.Remove(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};

// MISC
Milly.Misc = {};
Milly.Misc.GetRandomInteger = function (Minimum, Maximum, Mode) {
    switch (Mode) {
        case "inclusive":
        case "incl":
            try {
                return Math.floor(Math.random() * (Maximum - Minimum + 1)) + Minimum;
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetRandomInteger(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetRandomInteger(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        case "exclusive":
        case "excl":
            try {
                return Math.floor(Math.random() * (Maximum - Minimum)) + Minimum;
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetRandomInteger(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetRandomInteger(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetRandomInteger(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys({ Mode })[0]}: Unknown argument called '${Mode}'.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ Mode })[0]}: Expected "inclusive / incl" or "exclusive / excl".`,
                "err"
            );
            break;
    }
};
Milly.Misc.GetRandomFloat = function (Minimum, Maximum, Mode, Rounded) {
    switch (Mode) {
        case "inclusive":
        case "incl":
            try {
                let Value = Math.random() * (Maximum - Minimum + 1) + Minimum;
                if (!Rounded) {
                    return Number.parseFloat(Value.toFixed(10));
                } else {
                    return Number.parseFloat(Value.toFixed(Rounded));
                }
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetRandomFloat(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetRandomFloat(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        case "exclusive":
        case "excl":
            try {
                let Value = Math.random() * (Maximum - Minimum) + Minimum;
                if (!Rounded) {
                    return Number.parseFloat(Value.toFixed(10));
                } else {
                    return Number.parseFloat(Value.toFixed(Rounded));
                }
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetRandomFloat(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetRandomFloat(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetRandomFloat(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetRandomFloat(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys({ Mode })[0]}: Unknown argument called '${Mode}'.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ Mode })[0]}: Expected "inclusive / incl" or "exclusive / excl".`,
                "err"
            );
            break;
    }
};

// Section 01: GIMMICKS
Milly.Misc.TypewriterText = function (ObjectName, Text, AppearDelay, TypeObject, ObjectAmount) {
    function CoreFunction(Element) {
        try {
            let WordPosition = -1;
            let EachWord = Text.split("");

            Element.innerHTML = "";
            if (!AppearDelay) {
                let TypeEvent = setInterval(function () {
                    WordPosition++;
                    Element.innerHTML += EachWord[WordPosition];

                    if (Element.innerHTML.length >= EachWord.length) {
                        clearInterval(TypeEvent);
                    }
                }, 250);
            } else {
                let TypeEvent = setInterval(function () {
                    WordPosition++;
                    Element.innerHTML += EachWord[WordPosition];

                    if (Element.innerHTML.length >= EachWord.length) {
                        clearInterval(TypeEvent);
                    }
                }, AppearDelay);
            }
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.TypewriterText(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Misc.TypewriterText(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.TypewriterText(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Misc.CreateTypewriterText = function (ParentName, Text, TypeText, AppearDelay, TypeParent, ParentAmount) {
    function CoreFunction(Element) {
        try {
            let NewTypewriter = document.createElement(TypeText);
            Element.appendChild(NewTypewriter);

            let WordPosition = -1;
            let EachWord = Text.split("");

            NewTypewriter.innerHTML = "";
            if (!AppearDelay) {
                let TypeEvent = setInterval(function () {
                    WordPosition++;
                    NewTypewriter.innerHTML += EachWord[WordPosition];

                    if (NewTypewriter.innerHTML.length >= EachWord.length) {
                        clearInterval(TypeEvent);
                    }
                }, 250);
            } else {
                let TypeEvent = setInterval(function () {
                    WordPosition++;
                    NewTypewriter.innerHTML += EachWord[WordPosition];

                    if (NewTypewriter.innerHTML.length >= EachWord.length) {
                        clearInterval(TypeEvent);
                    }
                }, AppearDelay);
            }
            return NewTypewriter;
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.CreateTypewriterText(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Misc.CreateTypewriterText(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeParent) {
        case "class":
        case "c":
            let ClassParent = document.getElementsByClassName(ParentName)[ParentAmount];
            return {
                ReturnElement: ClassParent,
                NewTypewriter: CoreFunction(ClassParent)
            };
            break;

        case "id":
        case "i":
            let IdParent = document.querySelectorAll(`#${ParentName}`)[ParentAmount];
            return {
                ReturnElement: IdParent,
                NewTypewriter: CoreFunction(IdParent)
            };
            break;
            break;

        case "tag":
        case "t":
            let TagParent = document.getElementsByTagName(ParentName)[ParentAmount];
            return {
                ReturnElement: TagParent,
                NewTypewriter: CoreFunction(TagParent)
            };
            break;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ParentName)[ParentAmount];
            let Id = document.querySelectorAll(`#${ParentName}`)[ParentAmount];
            let Tag = document.getElementsByTagName(ParentName)[ParentAmount];

            if (Class !== undefined) {
                return {
                    ReturnElement: Class,
                    NewTypewriter: CoreFunction(Class)
                };
                break;
            } else if (Id !== undefined) {
                return {
                    ReturnElement: Id,
                    NewTypewriter: CoreFunction(Id)
                };
            } else if (Tag !== undefined) {
                return {
                    ReturnElement: Tag,
                    NewTypewriter: CoreFunction(Tag)
                };
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.CreateTypewriterText(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeParent })[0]}: Unknown argument called '${TypeParent}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeParent })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};

// Section 02: TIME
Milly.Misc.StartTimewatch = function (
    ObjectName,
    Hours,
    Minutes,
    Seconds,
    EndHour,
    EndMinute,
    EndSecond,
    Speed,
    OnEvent,
    TypeObject,
    ObjectAmount
) {
    function CoreFunction(Element) {
        try {
            let EvaluatedSeconds = Seconds;
            let EvaluatedMinutes = Minutes;
            let EvaluatedHours = Hours;

            Element.innerHTML = `${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedHours)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedMinutes)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedSeconds)}`;
            if (!Speed) {
                let TimeCalculation = setInterval(function () {
                    EvaluatedSeconds++;

                    if (EvaluatedSeconds > 59) {
                        EvaluatedSeconds = 0;
                        EvaluatedMinutes++;
                    }

                    if (EvaluatedMinutes > 59) {
                        EvaluatedMinutes = 0;
                        EvaluatedHours++;
                    }

                    if (!EndSecond && !EndMinute && !EndHour) {
                        null;
                    } else if (
                        EvaluatedSeconds >= EndSecond &&
                        EvaluatedMinutes >= EndMinute &&
                        EvaluatedHours >= EndHour
                    ) {
                        clearInterval(TimeCalculation);
                        setTimeout(function () {
                            OnEvent();
                        }, 1000);
                    }

                    Element.innerHTML = `${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedHours)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedMinutes)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedSeconds)}`;
                }, 1000);
            } else {
                let TimeCalculation = setInterval(function () {
                    EvaluatedSeconds++;

                    if (EvaluatedSeconds > 59) {
                        EvaluatedSeconds = 0;
                        EvaluatedMinutes++;
                    }

                    if (EvaluatedMinutes > 59) {
                        EvaluatedMinutes = 0;
                        EvaluatedHours++;
                    }

                    if (!EndSecond && !EndMinute && !EndHour) {
                        null;
                    } else if (
                        EvaluatedSeconds >= EndSecond &&
                        EvaluatedMinutes >= EndMinute &&
                        EvaluatedHours >= EndHour
                    ) {
                        clearInterval(TimeCalculation);
                        setTimeout(function () {
                            OnEvent();
                        }, Speed);
                    }

                    Element.innerHTML = `${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedHours)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedMinutes)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedSeconds)}`;
                }, Speed);
            }
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.StartTimewatch(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Misc.StartTimewatch(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.StartTimewatch(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Misc.StartCountdown = function (
    ObjectName,
    Hours,
    Minutes,
    Seconds,
    EarlyHourEnd,
    EarlyMinuteEnd,
    EarlySecondEnd,
    Speed,
    OnEvent,
    TypeObject,
    ObjectAmount
) {
    function CoreFunction(Element) {
        try {
            let EvaluatedSeconds = Seconds;
            let EvaluatedMinutes = Minutes;
            let EvaluatedHours = Hours;

            Element.innerHTML = `${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedHours)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedMinutes)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedSeconds)}`;

            if (!Speed) {
                let CountdownCalculation = setInterval(function () {
                    EvaluatedSeconds--;
                    if (EvaluatedSeconds < 0) {
                        EvaluatedSeconds = 59;
                        EvaluatedMinutes--;
                    }
                    if (EvaluatedMinutes < 0) {
                        EvaluatedMinutes = 59;
                        EvaluatedHours--;
                    }

                    if (EvaluatedHours < 0 && EvaluatedMinutes < 0 && EvaluatedSeconds < 0) {
                        clearInterval(CountdownCalculation);
                        setTimeout(function () {
                            OnEvent();
                        }, 1000);
                    } else if (
                        EvaluatedHours <= EarlyHourEnd &&
                        EvaluatedMinutes <= EarlyMinuteEnd &&
                        EvaluatedSeconds <= EarlySecondEnd
                    ) {
                        clearInterval(CountdownCalculation);
                        setTimeout(function () {
                            OnEvent();
                        }, 1000);
                    }

                    EElement.innerHTML = `${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedHours)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedMinutes)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedSeconds)}`;
                }, 1000);
            } else {
                let CountdownCalculation = setInterval(function () {
                    EvaluatedSeconds--;
                    if (EvaluatedSeconds < 0) {
                        EvaluatedSeconds = 59;
                        EvaluatedMinutes--;
                    }
                    if (EvaluatedMinutes < 0) {
                        EvaluatedMinutes = 59;
                        EvaluatedHours--;
                    }

                    if (EvaluatedHours < 0 && EvaluatedMinutes < 0 && EvaluatedSeconds < 0) {
                        clearInterval(CountdownCalculation);

                        setTimeout(function () {
                            OnEvent();
                        }, Speed);
                    } else if (
                        EvaluatedHours <= EarlyHourEnd &&
                        EvaluatedMinutes <= EarlyMinuteEnd &&
                        EvaluatedSeconds <= EarlySecondEnd
                    ) {
                        clearInterval(CountdownCalculation);
                        setTimeout(function () {
                            OnEvent();
                        }, Speed);
                    }

                    Element.innerHTML = `${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedHours)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedMinutes)}:${FUNC_BUILT.NUMBER_CONVERSION(EvaluatedSeconds)}`;
                }, Speed);
            }
        } catch (Error) {
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.StartCountdown(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
        } finally {
            switch (Milly.Preferences.EnableDebug) {
                case true:
                    FUNC_BUILT.RETURN_MSG(`Milly.Misc.StartCountdown(): Executed at ${Element}`, "log");
                    break;
                case false:
                    break;
                default:
                    FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                        "err"
                    );
                    FUNC_BUILT.RETURN_SIMPLE_MSG(
                        `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                        "err"
                    );
                    break;
            }
        }
    }

    switch (TypeObject) {
        case "class":
        case "c":
            let ClassObject = document.getElementsByClassName(ObjectName)[ObjectAmount];
            CoreFunction(ClassObject);
            return ClassObject;
            break;

        case "id":
        case "i":
            let IdObject = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            CoreFunction(IdObject);
            return IdObject;
            break;

        case "tag":
        case "t":
            let TagObject = document.getElementsByTagName(ObjectName)[ObjectAmount];
            CoreFunction(TagObject);
            return TagObject;
            break;

        case "free":
        case "f":
            let Class = document.getElementsByClassName(ObjectName)[ObjectAmount];
            let Id = document.querySelectorAll(`#${ObjectName}`)[ObjectAmount];
            let Tag = document.getElementsByTagName(ObjectName)[ObjectAmount];

            if (Class !== undefined) {
                CoreFunction(Class);
                return Class;
            } else if (Id !== undefined) {
                CoreFunction(Id);
                return Id;
            } else if (Tag !== undefined) {
                CoreFunction(Tag);
                return Tag;
            }
            break;

        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.StartCountdown(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Unknown argument called '${TypeObject}'.`,
                "err"
            );
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ TypeObject })[0]}: Expected "class / c", "id / i", "tag / t" or "free / f".`,
                "err"
            );
            break;
    }
};
Milly.Misc.GetCurrentDates = function (Mode) {
    switch (Mode) {
        case "day":
            try {
                let Current = new Date();
                let DayParse = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

                return DayParse[Current.getDay()];
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentDates(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetCurrentDates(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        case "date":
        case "dd":
            try {
                let Current = new Date();

                return FUNC_BUILT.NUMBER_CONVERSION(Current.getDate());
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentDates(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetCurrentDates(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        case "month":
        case "mm":
            try {
                let Current = new Date();

                return FUNC_BUILT.NUMBER_CONVERSION(Current.getMonth());
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentDates(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetCurrentDates(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        case "year":
        case "yy":
            try {
                let Current = new Date();

                return FUNC_BUILT.NUMBER_CONVERSION(Current.getFullYear());
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentDates(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetCurrentDates(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        case "all":
            try {
                let Current = new Date();
                let DayParse = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

                return `${DayParse[Current.getDay()]}, ${FUNC_BUILT.NUMBER_CONVERSION(Current.getDate())}/${FUNC_BUILT.NUMBER_CONVERSION(Current.getMonth())}/${FUNC_BUILT.NUMBER_CONVERSION(Current.getFullYear())}`;
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentDates(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetCurrentDates(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentDates(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys({ Mode })[0]}: Unknown argument called '${Mode}'.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ Mode })[0]}: Expected "day", "date / dd", "month / mm", "year / yy" or "all".`,
                "err"
            );
            break;
    }
};
Milly.Misc.GetCurrentTimes = function (Mode) {
    switch (Mode) {
        case "second":
        case "sec":
            try {
                let Current = new Date();

                return FUNC_BUILT.NUMBER_CONVERSION(Current.getSeconds());
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentTimes(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetCurrentTimes(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        case "minute":
        case "min":
            try {
                let Current = new Date();

                return FUNC_BUILT.NUMBER_CONVERSION(Current.getMinutes());
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentTimes(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetCurrentTimes(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        case "hour":
        case "h":
            try {
                let Current = new Date();

                return FUNC_BUILT.NUMBER_CONVERSION(Current.getHours());
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentTimes(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetCurrentTimes(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        case "all":
            try {
                let Current = new Date();

                return `${FUNC_BUILT.NUMBER_CONVERSION(Current.getHours())}:${FUNC_BUILT.NUMBER_CONVERSION(Current.getMinutes())}:${FUNC_BUILT.NUMBER_CONVERSION(Current.getSeconds())}`;
            } catch (Error) {
                FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentTimes(): An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
            } finally {
                switch (Milly.Preferences.EnableDebug) {
                    case true:
                        FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetCurrentTimes(): Executed with mode "${Mode}"`, "log");
                        break;
                    case false:
                        break;
                    default:
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: An error has occured.`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                            "err"
                        );
                        FUNC_BUILT.RETURN_SIMPLE_MSG(
                            `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                            "err"
                        );
                        break;
                }
            }
            break;
        default:
            FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetCurrentTimes(): An error has occured.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys({ Mode })[0]}: Unknown argument called '${Mode}'.`, "err");
            FUNC_BUILT.RETURN_SIMPLE_MSG(
                `${Object.keys({ Mode })[0]}: Expected "day", "date / dd", "month / mm", "year / yy" or "all".`,
                "err"
            );
            break;
    }
};

// Section 3: FUN?
Milly.Misc.GetRandomizedEmoticons = function () {
    try {
        console.log(`%c${FUNC_BUILT.PARSE_FACIALS()}`, FUNC_BUILT.PARSE_STYLE(Milly.Preferences.FaceStyler));
    } catch (Error) {
        FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetRandomizedEmoticons(): An error has occured.`, "err");
        FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
        FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
    } finally {
        switch (Milly.Preferences.EnableDebug) {
            case true:
                FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetRandomizedEmoticons(): Executed"`, "log");
                break;
            case false:
                break;
            default:
                FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(
                    `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                    "err"
                );
                FUNC_BUILT.RETURN_SIMPLE_MSG(
                    `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                    "err"
                );
                break;
        }
    }
};

// Section 4: INFORMATIVE
Milly.Misc.GetModuleInfo = function () {
    try {
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `<< milly.js: Module Information >>`,
            "log",
            "color: #D98FFF; text-shadow: 0 0 0.25em #AA00FF, 0 0 0.5em #AA00FF; font-size: 1.75em; padding: 4px 8px;"
        );
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Version: v${Milly.Preferences.ModuleInfo.Version}`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Build: build ${Milly.Preferences.ModuleInfo.Build}`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        console.log("");
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Number of built-in function(s): 7 function(s)`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Number of function(s) [Excluding built-in ones]: 27 function(s); including this`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Total number of function(s): 33 function(s); including this`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        console.log("");
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Volunteers:`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `=> [1]: @emiy.172_ [Volunteering for adding custom faces]`,
            "log",
            "color: #9494FF; text-shadow: 0 0 0.25em #0000FF, 0 0 0.5em #0000FF; font-size: 1.25em; margin-left: 4ch;"
        );
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `=> [2]: @tico628 [Volunteering for adding custom faces]`,
            "log",
            "color: #9494FF; text-shadow: 0 0 0.25em #0000FF, 0 0 0.5em #0000FF; font-size: 1.25em; margin-left: 4ch;"
        );
        console.log("");
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Current iteration: 2nd iteration, success`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        console.log("");
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Progress: Completed`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Duration: 1w 0d 1hr estimated`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Date of completion: 07/05/2026 [DD/MM/YY] | 09:17:02 HH:MM:SS [In progress]`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        console.log("");
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Comments:`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `=> This took me so long, I totally make myself burned out lol. At least it was worth my time and struggle. -@root301916`,
            "log",
            "color: #FFC2A3; text-shadow: 0 0 0.25em #FF5500, 0 0 0.5em #FF5500; font-size: 1.25em; margin-left: 4ch;"
        );
        console.log("");
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Time of fetch: ${FUNC_BUILT.NUMBER_CONVERSION(new Date().getHours())}:${FUNC_BUILT.NUMBER_CONVERSION(new Date().getMinutes())}:${FUNC_BUILT.NUMBER_CONVERSION(new Date().getSeconds())}`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `>> Date of fetch: ${FUNC_BUILT.NUMBER_CONVERSION(new Date().getDate())}/${FUNC_BUILT.NUMBER_CONVERSION(new Date().getMonth())}/${FUNC_BUILT.NUMBER_CONVERSION(new Date().getFullYear())}`,
            "log",
            "color: #A97DFF; text-shadow: 0 0 0.25em #5500FF, 0 0 0.5em #5500FF; font-size: 1.25em; margin-left: 2ch;"
        );
        console.log("");
        FUNC_BUILT.RETURN_SIMPLE_MSG_STYLER(
            `<< Goodbye and have a blessed day by God! >>`,
            "log",
            "color: #CCFFA8; text-shadow: 0 0 0.25em #66FF00, 0 0 0.5em #66FF00; font-size: 1.25em;"
        );
    } catch (Error) {
        FUNC_BUILT.RETURN_SIMPLE_MSG(`Milly.Misc.GetModuleInfo(): An error has occured.`, "err");
        FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error name: ${Error.name}`, "err");
        FUNC_BUILT.RETURN_SIMPLE_MSG(` >> Error details: ${Error.message}`, "err");
    } finally {
        switch (Milly.Preferences.EnableDebug) {
            case true:
                FUNC_BUILT.RETURN_MSG(`Milly.Misc.GetModuleInfo(): Executed`, "log");
                break;
            case false:
                break;
            default:
                FUNC_BUILT.RETURN_SIMPLE_MSG(`${Object.keys(Milly.Preferences)[1]}: An error has occured.`, "err");
                FUNC_BUILT.RETURN_SIMPLE_MSG(
                    `${Object.keys(Milly.Preferences)[1]}: Unknown argument called '${Milly.Preferences.EnableDebug}'`,
                    "err"
                );
                FUNC_BUILT.RETURN_SIMPLE_MSG(
                    `${Object.keys(Milly.Preferences)[1]}: Expected "true" or "false".`,
                    "err"
                );
                break;
        }
    }
};
