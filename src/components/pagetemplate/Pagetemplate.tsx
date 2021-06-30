import "./Pagetemplate.scss";

import React, { HTMLAttributes, PropsWithChildren } from "react";
import { Section } from "trunx";

import KsFooter from "./KsFooter";
import KsNavbar from "./KsNavbar";

export interface PageTemplateProps extends HTMLAttributes<HTMLDivElement> {
    /* Enclose children i a <Section>-tag if true (default) */
    renderSection?: boolean;
}

function PageTemplate(props: PropsWithChildren<PageTemplateProps>) {
    const { renderSection = true, children, ...otherProps } = props;
    return (
        <div {...otherProps} id="page-container">
            <KsNavbar />
            {renderSection ? <Section id="page-content">{children}</Section> : children}
            <KsFooter />
        </div>
    );
}

export default PageTemplate;