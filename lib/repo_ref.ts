/*
 * Copyright © 2021 Atomist, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { isBasicAuthCredentials } from "@atomist/automation-client/lib/operations/common/BasicAuthCredentials";
import {
	GitHubDotComBase,
	GitHubRepoRef,
} from "@atomist/automation-client/lib/operations/common/GitHubRepoRef";
import {
	isTokenCredentials,
	ProjectOperationCredentials,
} from "@atomist/automation-client/lib/operations/common/ProjectOperationCredentials";

export class NewTokenGitHubRepoRef extends GitHubRepoRef {
	constructor(
		owner: string,
		repo: string,
		sha?: string,
		rawApiBase: string = GitHubDotComBase,
		path?: string,
		branch?: string,
		rawRemoteBase?: string,
	) {
		super(owner, repo, sha, rawApiBase, path, branch, rawRemoteBase);
	}

	public cloneUrl(creds: ProjectOperationCredentials): string {
		if (!!creds && isBasicAuthCredentials(creds)) {
			return (
				`${this.scheme}${encodeURIComponent(
					creds.username,
				)}:${encodeURIComponent(creds.password)}@` +
				`${this.remoteBase}/${this.pathComponent}.git`
			);
		}
		if (!!creds && isTokenCredentials(creds)) {
			const token = creds.token;
			// GitHub App tokens start with v1. and are expected in the password field
			if (
				!!token &&
				(token.startsWith("v1.") ||
					token.startsWith("ghu_") ||
					token.startsWith("ghs_") ||
					token.startsWith("ghr_"))
			) {
				return `${this.scheme}atomist:${token}@${this.remoteBase}/${this.pathComponent}.git`;
			} else {
				return `${this.scheme}${token}:x-oauth-basic@${this.remoteBase}/${this.pathComponent}.git`;
			}
		}
		return `${this.scheme}${this.remoteBase}/${this.pathComponent}.git`;
	}
}
