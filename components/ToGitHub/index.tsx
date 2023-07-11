import { UilGithub } from "@components/Icons/GitHub";
import { Cards, Card } from "nextra/components";

export function ToGitHub({ repo }) {
  return (
    <Cards num={1}>
      <Card
        arrow
        href={`https://github.com/${repo}`}
        title={`${repo} - GitHub`}
        icon={<UilGithub />}
        children
        // @ts-ignore
        target="_blank"
      />
    </Cards>
  );
}
